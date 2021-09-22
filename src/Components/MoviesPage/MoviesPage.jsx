import { useState, useEffect } from 'react';
// import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import s from './MoviesPage.module.css';
const { Search } = Input;
// const onSearch = value => console.log(value);

function MoviesPage() {
  return (
    <>
      <h2>MoviesPage</h2>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          // onSearch={onSearch}
        />
      </Space>
    </>
  );
}

export { MoviesPage };
