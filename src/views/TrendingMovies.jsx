import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetTrendingMovies } from '../services/getMoviesApi';
// import { Card } from 'antd';
import s from './TrendingMovies.module.css';

// const { Meta } = Card;

function TrendingMovies() {
  // const { url } = useRouteMatch();

  // console.log(url);
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    GetTrendingMovies().then(movie => {
      setTrendingFilms(movie);
    });
  }, []);

  // console.log(trendingFilms);
  return (
    <>
      <h2 className={s.mainTitle}>Trending today</h2>

      {trendingFilms && (
        <ul className={s.trendingList}>
          {trendingFilms.map(film => (
            <li className={s.trendingList__item} key={film.id}>
              {/* <h2>
                {' '}
                {film.title} {film.name}
              </h2> */}
              <Link to={`movies/${film.id}`}>
                {/* <Link to={`${URL}/${film.id}`}> */}

                <img
                  alt={film.title}
                  src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                />

                <h2 className={s.filmName}>{film.title} </h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export { TrendingMovies };
