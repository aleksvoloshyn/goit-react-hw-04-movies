import { Switch, Route } from 'react-router-dom';
import { AppBar } from './Components/AppBar/AppBar';
import Container from './Components/Container/Container';
import { HomePage } from './Components/HomePage/HomePage';
// import MoviesPage from './Components/MoviesPage/MoviesPage';
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
          {/* <MoviesPage /> */}
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
