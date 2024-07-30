import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "../types/Movies";

const BESE_URL = "http://localhost:3001/";

interface MoviesResponse {
  data: Movie[];
  total: number;
}

interface MovieParams {
  limit: number;
  page: number;
  searchText?: string;
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BESE_URL }),
  tagTypes: ['Movies'],
  endpoints: (build) => ({
    getMovies: build.query<MoviesResponse, MovieParams>({
      query: ({ page, limit, searchText }) => {
        const searchTextQuery = searchText && `&title_like=${searchText}`;
        return `movies?_page=${page}&_limit=${limit}${searchTextQuery}`;
      },
      transformResponse: (response: Movie[], meta) => ({
        data: response,
        total: Number(meta?.response?.headers.get('X-Total-Count') || 0),
      }),
      providesTags: (result) =>
        result ?
          [
            ...result.data.map(({ id }) => ({ type: 'Movies', id } as const)),
            { type: 'Movies', id: 'LIST' },
          ]
          :
          [{ type: 'Movies', id: 'LIST' }]
    }),

    getMovieById: build.query<Movie, string>({
      query: (id) => `movies/${id}`,
    }),

    getFavoriteMovies: build.query<MoviesResponse, MovieParams>({
      query: ({ page, limit }) => `movies?_page=${page}&_limit=${limit}&favorite=true`,
      transformResponse: (response: Movie[], meta) => ({
        data: response,
        total: Number(meta?.response?.headers.get('X-Total-Count') || 0),
      }),
      providesTags: (result) =>
        result ?
          [
            ...result.data.map(({ id }) => ({ type: 'Movies', id } as const)),
            { type: 'Movies', id: 'FAVORITE' },
          ]
          :
          [{ type: 'Movies', id: 'FAVORITE' }]
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
        );
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Movies', id }]
    }),

    toggleFavorite: build.mutation<Movie, { id: string; isFavorite: boolean; updateConfig: any }>({
      query: ({ id, isFavorite }) => ({
        url: `movies/${id}`,
        method: 'PATCH',
        body: { favorite: isFavorite }
      }),
      async onQueryStarted({ id, isFavorite, updateConfig }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          movieApi.util.updateQueryData('getMovieById', id, (draft) => {
            draft.favorite = isFavorite;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [
        { type: 'Movies', id },
        { type: 'Movies', id: 'LIST' },
        { type: 'Movies', id: 'FAVORITE' }
      ]
    })
  })
})

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetFavoriteMoviesQuery,
  useAddMovieMutation,
  useDeleteMovieMutation,
  useUpdateMovieMutation,
  useToggleFavoriteMutation
} = movieApi;