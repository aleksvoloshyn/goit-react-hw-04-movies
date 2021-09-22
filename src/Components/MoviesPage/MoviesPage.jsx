import { useState, useEffect } from 'react';
// import { Link, useParams, useRouteMatch } from 'react-router-dom';
// import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import s from './MoviesPage.module.css';
// const { Search } = Input;
// const onSearch = value => console.log(value);

function MoviesPage() {
  const [searchQuery, setsearhQuery] = useState('');
  // const [query, setQuery] = useState('');

  const searchMovie = event => {
    event.preventDefault();

    // console.log(query);
  };

  return (
    <>
      <h2>Search movies</h2>

      <form className={s.SearchForm} action="" onSubmit={searchMovie}>
        <input
          className={s.SearchForm__input}
          type="text"
          placeholder="Search film.."
          value={searchQuery}
        />
        <button className={s.SearchForm__button} type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export { MoviesPage };
