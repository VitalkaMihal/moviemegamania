import { Movie, MovieApi, ResponseMovie, ResponseMovieApi } from "types";

const transformMovie = (movieApi: MovieApi[]): Movie[] => {
  return movieApi.map((movie: MovieApi) => {
    return {
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster,
    };
  });
};

const transformMovieApi = (responseMovieApi: ResponseMovieApi): ResponseMovie => {
  return {
    search: transformMovie(responseMovieApi.Search),
    totalResults: responseMovieApi.totalResults,
    response: responseMovieApi.Response,
  };
};

export { transformMovieApi, transformMovie };
