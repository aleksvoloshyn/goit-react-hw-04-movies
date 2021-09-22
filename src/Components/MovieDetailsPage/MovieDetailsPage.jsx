import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { GetMovieById } from '../../services/getMoviesApi';
import { Card } from 'antd';

import s from './MovieDetailsPage.module.css';

const { Meta } = Card;

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // const [moviePosterPath, setmoviePosterPath] = useState([]);

  useEffect(() => {
    // GetMovieById(movieId);

    GetMovieById(movieId).then(data => {
      setMovie(data);
    });

    console.log(movie);
    // console.log(moviePosterPath);
    console.log(movieId);
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
            {/* {movie.genres.map(genre => genre.name)} */}
          </Card>
        </>
      )}
    </>
  );
}

export { MovieDetailsPage };
