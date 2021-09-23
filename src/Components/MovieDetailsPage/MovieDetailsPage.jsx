import { useState, useEffect, lazy, Suspense } from 'react';

// import { useParams, NavLink, Route, useRouteMatch } from 'react-router-dom';
import { useParams, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import {
  GetMovieById,
  GetMovieCast,
  GetMovieReview,
} from '../../services/getMoviesApi';
import { AdditionalInfo } from '../AdditionalInfo/AdditionalInfo';
// import { Cast } from '../Cast/Cast';
// import { Reviews } from '../Reviews/Reviews';
// import { Card } from 'antd';
import s from './MovieDetailsPage.module.css';

// const { Meta } = Card;
const Cast = lazy(() =>
  import('../Cast/Cast.jsx' /*webpackChunkName: "Cast"*/),
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews.jsx' /*webpackChunkName: "Reviews"*/),
);

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [review, setReview] = useState(null);
  const history = useHistory();
  // const location = useLocation();

  useEffect(() => {
    GetMovieById(movieId).then(setMovie);
    GetMovieCast(movieId).then(setCast);
    GetMovieReview(movieId).then(setReview);
  }, [movieId]);

  // console.log(movieId);
  // console.log(cast);

  const onGoBackClick = () => {
    history.goBack();
  };

  return (
    <>
      {/* <NavLink exact to="/" className={s.link}>
        Home
      </NavLink> */}

      <button className={s.button} type="button" onClick={onGoBackClick}>
        Go Back
      </button>

      {movie && (
        <>
          <div className={s.card}>
            <img
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <div className={s.info}>
              {' '}
              <h2>{movie.title}</h2> <p>{movie.overview} </p>
              <p className={s.userScore}>{`User Score: ${
                movie.vote_average * 10
              }%`}</p>
              <h2>Overview: </h2>
              <p className={s.overview}>{movie.overview}</p>
              <h2>Genres:</h2>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </div>
          </div>
          <hr />
          <AdditionalInfo movie={movie} />
          <Suspense fallback={<div>Загружаем..</div>}>
            {' '}
            <Route path="/movies/:movieId/cast">
              <Cast cast={cast} />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <Reviews review={review} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
