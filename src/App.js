import { Switch, Route } from 'react-router-dom';
import { AppBar } from './Components/AppBar/AppBar';
import Container from './Components/Container/Container';
import { HomePage } from './Components/HomePage/HomePage';
import NotFoundView from './views/NotFoundView';
import { MoviesPage } from './Components/MoviesPage/MoviesPage';
import { MovieDetailsPage } from './Components/MovieDetailsPage/MovieDetailsPage';
import './App.css';

function App() {
  return (
    <Container>
      <AppBar />
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
    </Container>
  );
}

export default App;
