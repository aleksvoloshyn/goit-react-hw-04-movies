import { useState, useEffect } from 'react';
import { useParams, NavLink, Route, useRouteMatch } from 'react-router-dom';
import {
  GetMovieById,
  GetMovieCast,
  GetMovieReview,
} from '../../services/getMoviesApi';
import { AdditionalInfo } from '../AdditionalInfo/AdditionalInfo';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { Card } from 'antd';

import s from './MovieDetailsPage.module.css';

const { Meta } = Card;

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [review, setReview] = useState(null);

  useEffect(() => {
    GetMovieById(movieId).then(setMovie);
    GetMovieCast(movieId).then(setCast);
    GetMovieReview(movieId).then(setReview);
  }, [movieId]);

  // console.log(movieId);
  console.log(cast);

  return (
    <>
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
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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

            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </Card>
          <hr />
          <AdditionalInfo movie={movie} />
          <Route path="/movies/:movieId/cast">
            <Cast cast={cast} />
          </Route>

          <Route path="/movies/:movieId/reviews">
            <Reviews review={review} />
          </Route>
        </>
      )}
    </>
  );
}

export { MovieDetailsPage };
