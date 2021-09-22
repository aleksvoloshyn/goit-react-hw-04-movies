import s from './Reviews.module.css';

function Reviews({ review }) {
  console.log(review.results);
  if (review.results.length === 0) {
    return <p>Sorry, we do not have reviews for this movie</p>;
  }
  if (review.results.length > 0) {
    return (
      <>
        <ul>
          {review.results.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>{' '}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export { Reviews };
