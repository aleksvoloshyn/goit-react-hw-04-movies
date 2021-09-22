import { useState, useEffect } from 'react';
import { Link, useParams, useRouteMatch, NavLink } from 'react-router-dom';
import { GetMovieById } from '../../services/getMoviesApi';
import { Card } from 'antd';

import s from './MovieDetailsPage.module.css';

const { Meta } = Card;

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    GetMovieById(movieId).then(data => {
      setMovie(data.data);
    });
  }, [movieId]);

  return (
    <>
      {/* <h2> MovieDetailsPage: {movieId}</h2> */}
      <NavLink exact to="/" className={s.link}>
        Home
      </NavLink>
      {movie && (
        <>
          <Card
            className={s.card}
            // hoverable
            cover={
              <img
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              />
            }
          >
            <Meta title={movie.title} description={movie.overview} />

            <p className={s.userScore}>{`User Score: ${
              movie.vote_average * 10
            }%`}</p>
            <h2>Overview: </h2>
            <p className={s.overview}>{movie.overview}</p>
            <h2>Genres:</h2>
          </Card>
          {/* 
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h2>
            {movie.title}
            {movie.name}
          </h2>

          <p>{`User Score: ${movie.vote_average * 10}%`}</p>
          <h2>Overview: </h2>
          <p>{movie.overview}</p>
          <h2>Genres:</h2> */}
        </>
      )}
    </>
  );
}

export { MovieDetailsPage };
