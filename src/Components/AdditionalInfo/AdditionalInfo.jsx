import s from './AdditionalInfo.module.css';
// import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function AdditionalInfo({ movie }) {
  return (
    <>
      <ul>
        <li>
          {' '}
          <NavLink exact to={`/movies/${movie.id}/cast`}>
            Cast
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink exact to={`/movies/${movie.id}/reviews`}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr />
    </>
  );
}

export { AdditionalInfo };
