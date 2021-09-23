import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import 'antd/dist/antd.css';
import s from './MoviesPage.module.css';
import { GetMovieByQuery } from '../../services/getMoviesApi';
import { Card } from 'antd';
import defaultImage from '../../pics/defaultImage.jpg';
// import { Search } from 'semantic-ui-react';
const { Meta } = Card;

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const historyQuery = history.location.search.split('=')[1];
  const handleChange = event => {
    event.preventDefault();
    setQuery(event.currentTarget.value);
  };

  useEffect(() => {
    // GetMovieByQuery(query).then(setResults);

    // console.log('historyQuery:', historyQuery);
    // console.log('history:', history);
    if (historyQuery === undefined) {
      return;
    }
    GetMovieByQuery(historyQuery).then(setResults);
  }, [historyQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    if (!query) {
      alert('Ввдите данные в строку поиска');
      return;
    }
    setQuery('');

    GetMovieByQuery(query).then(setResults);

    // console.log('location:', location);
    // console.log('history:', history);
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <h2>Search movies</h2>

      <form className={s.SearchForm} action="" onSubmit={handleSubmit}>
        <input
          className={s.SearchForm__input}
          type="text"
          placeholder="Search film.."
          value={query}
          onChange={handleChange}
        />
        <button className={s.SearchForm__button} type="submit">
          Search
        </button>
      </form>

      {results !== null && (
        <ul className={s.searchList}>
          {results.map(res => (
            <li className={s.searchList__item} key={res.id}>
              <Link to={`movies/${res.id}`}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt={res.title}
                      src={
                        res.poster_path !== null
                          ? `https://image.tmdb.org/t/p/w500/${res.poster_path}`
                          : defaultImage
                      }
                    />
                  }
                >
                  <Meta title={res.title} />
                </Card>

                {res.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export { MoviesPage };
