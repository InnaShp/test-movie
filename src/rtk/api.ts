import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "../types/Movies";

const BESE_URL = "http://localhost:3001/";

type MoviesResponse = Movie[];

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BESE_URL }),
  tagTypes: ['Movies'],
  endpoints: (build) => ({
    getMovies: build.query<MoviesResponse, void>({
      query: () => 'movies',
      providesTags: (result) =>
        result ?
          [
            ...result.map(({ id }) => ({ type: 'Movies', id } as const)),
            { type: 'Movies', id: 'LIST' },
          ]
          :
          [{ type: 'Movies', id: 'LIST' }]
    }),

    getMovieById: build.query<Movie, string>({
      query: (id) => `movies/${id}`,
    }),

    addMovie: build.mutation<Movie, Partial<Movie>>({
      query: (body) => ({
        url: 'movies',
        method: 'Post',
        body
      }),
      invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
    }),

    deleteMovie: build.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `movies/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Movies', id }],
    }),

    updateMovie: build.mutation<void, Pick<Movie, 'id'> & Partial<Movie>>({
      query(data) {
        const { id, ...body } = data
        return {
          url: `movies/${id}`,
          method: 'PUT',
          body
        }
      },
      async onQueryStarted({ id, ...body }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          movieApi.util.updateQueryData('getMovieById', id, (draft) => {
            Object.assign(draft, body)
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Movies', id }]
    })
  })
}
)

export const { useGetMoviesQuery, useGetMovieByIdQuery, useAddMovieMutation, useDeleteMovieMutation, useUpdateMovieMutation } = movieApi;