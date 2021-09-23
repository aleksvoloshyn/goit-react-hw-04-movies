import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar } from './Components/AppBar/AppBar';
import Container from './Components/Container/Container';
import 'normalize.css';
// import { HomePage } from './Components/HomePage/HomePage';
// import NotFoundView from './views/NotFoundView';
// import { MoviesPage } from './Components/MoviesPage/MoviesPage';
// import { MovieDetailsPage } from './Components/MovieDetailsPage/MovieDetailsPage';
import './App.css';

const HomePage = lazy(() =>
  import('./Components/HomePage/HomePage.jsx' /*webpackChunkName: "HomePage"*/),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.jsx' /*webpackChunkName: "NotFoundView"*/),
);
const MoviesPage = lazy(() =>
  import(
    './Components/MoviesPage/MoviesPage.jsx' /*webpackChunkName: "MoviesPage"*/
  ),
);

const MovieDetailsPage = lazy(() =>
  import(
    './Components/MovieDetailsPage/MovieDetailsPage.jsx' /*webpackChunkName: "MovieDetailsPage"*/
  ),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Загружаем..</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
