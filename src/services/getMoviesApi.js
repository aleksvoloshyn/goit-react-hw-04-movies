import axios from 'axios';
const BASE_URL = `https://api.themoviedb.org/3`;
const key = 'd37bfeabc71c0969f8ae363116645ca9';
// const key =  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzdiZmVhYmM3MWMwOTY5ZjhhZTM2MzExNjY0NWNhOSIsInN1YiI6IjYwZmM1YWU1MzEwMzI1MDA0NmQ0ZDZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uT4H7WSXeMsSjGjy8BUOgYnf7tcI856eBr3c0MHeH2M';

// https://api.themoviedb.org/3/trending/all/week?api_key=d37bfeabc71c0969f8ae363116645ca9

function GetTrendingMovies() {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${key} `)
    .then(response => response.data.results)
    .catch(error => console.log('Error:', error));
}

function GetMovieByQuery(query) {
  return axios
    .get(`${BASE_URL}/movie?api_key=${key}&query=${query}`)
    .then(response => response.data.results)
    .catch(error => console.log('Error:', error));
}
function GetMovieById(id) {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${key}`)
    .then(response => response.data)
    .catch(error => console.log('Error:', error));
}

function GetMovieCast(id) {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${key}`)
    .then(response => response.data)
    .catch(error => console.log('Error:', error));
}

function GetMovieReview(id) {
  return axios
    .get(`${BASE_URL}/movie/${id}/reviews?api_key=${key}&page=1`)
    .then(response => response.data)
    .catch(error => console.log('Error:', error));
}

export {
  GetTrendingMovies,
  GetMovieByQuery,
  GetMovieById,
  GetMovieCast,
  GetMovieReview,
};
