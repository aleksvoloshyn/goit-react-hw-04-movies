import { useState, useEffect } from 'react';

import { GetTrendingMovies } from '../services/getMoviesApi';

function TrendingMovies() {
  const [trendingFilms, setTrendingFilms] = useState([]);
  useEffect(() => {
    GetTrendingMovies().then(data => {
      setTrendingFilms(data.data.results);
    });
  }, []);

  // console.log(trendingFilms);
  return (
    <>
      <h2>Trending today</h2>
      {trendingFilms && (
        <ul>
          {trendingFilms.map(film => (
            <li key={film.id}>
              {film.title} {film.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export { TrendingMovies };
