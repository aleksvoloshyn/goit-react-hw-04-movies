import s from './Cast.module.css';
// import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import PropTypes from 'prop-types';
const { Meta } = Card;

function Cast({ cast }) {
  //   const { movieId } = useParams();
  //   console.log(cast.cast.name);
  return (
    <>
      <ul className={s.castList}>
        {cast.cast.map(actor => (
          <li className={s.castList__item} key={actor.id}>
            {actor.profile_path && (
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt={actor.name}
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  />
                }
              >
                <Meta title={actor.name} />
              </Card>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
Cast.propTypes = {
  moviesId: PropTypes.string.isRequired,
};
export { Cast };
