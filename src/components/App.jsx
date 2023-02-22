import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const LazyLayout = lazy(() => import('./Layout/Layout'));
const LazyHomePage = lazy(() => import('../pages/HomePage'));
const LazyMoviesPage = lazy(() => import('../pages/MoviesPage'));
const LazyMovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const LazyCast = lazy(() => import('./Cast/Cast'));
const LazyReviews = lazy(() => import('./Reviews/Reviews'));
const LazyErrorMes = lazy(() => import('./ErrorMes/ErrorMes'));

 const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LazyLayout />}>
          <Route index element={<LazyHomePage />} />
          <Route path="/movies" element={<LazyMoviesPage />} />
          <Route path="/movies/:movieId" element={<LazyMovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<LazyCast />} />
            <Route path="/movies/:movieId/reviews" element={<LazyReviews />} />
          </Route>
          <Route path="*" element={<LazyErrorMes />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
