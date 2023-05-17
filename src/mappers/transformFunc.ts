import {
  DetailsMovie,
  DetailsMovieApi,
  Movie,
  MovieApi,
  ResponseMovie,
  ResponseMovieApi,
} from "types";

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

const transformDetailsMovie = (details: DetailsMovieApi): DetailsMovie => {
  return {
    title: details.Title,
    year: details.Year,
    rated: details.Rated,
    released: details.Released,
    runtime: details.Runtime,
    genre: details.Genre,
    director: details.Director,
    writer: details.Writer,
    actors: details.Actors,
    plot: details.Plot,
    language: details.Language,
    country: details.Country,
    awards: details.Awards,
    poster: details.Poster,
    ratings: details.Ratings.map((rating) => {
      return { source: rating.Source, value: rating.Value };
    }),
    metascore: details.Metascore,
    imdbRating: details.imdbRating,
    imdbVotes: details.imdbVotes,
    imdbID: details.imdbID,
    type: details.Type,
    dVD: details.DVD,
    boxOffice: details.BoxOffice,
    production: details.Production,
    website: details.Website,
    response: "True",
  };
};

export { transformMovieApi, transformMovie, transformDetailsMovie };
