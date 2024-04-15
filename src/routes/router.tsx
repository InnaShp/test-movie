import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import { paths } from "../config/paths.ts";
import Layout from "../layout/index.tsx";

export const Home = lazy(() => import("../pages/home.tsx"));
export const MoviePage = lazy(() => import("../pages/productItem.tsx"));
export const Favourites = lazy(() => import("../pages/favourites.tsx"));
export const PageNotFound = lazy(() => import("../pages/pageNotFound.tsx"));

function Router() {
  const routes = useRoutes([
    {
      element: (
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [
        { path: paths.HOME, element: <Home />, index: true },
        { path: paths.MOVIE, element: <MoviePage /> },
        { path: paths.FAVOURITES, element: <Favourites /> },
      ],
    },
    {
      path: paths.NOT_FOUND,
      element: <PageNotFound />,
    },
    {
      path: "*",
      element: <Navigate to={paths.NOT_FOUND} replace />,
    },
  ]);

  return routes;
}

export default Router;
