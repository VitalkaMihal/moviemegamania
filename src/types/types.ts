interface MovieApi {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface Movie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

interface ResponseMovieApi {
  Search: MovieApi[];
  totalResults: string;
  Response: "True";
}

interface ResponseMovie {
  search: Movie[];
  totalResults: string;
  response: "True";
}

interface RatingsMovieApi {
  Source: string;
  Value: string;
}
interface DetailsMovieApi {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingsMovieApi[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: "True";
}

interface RatingsMovie {
  source: string;
  value: string;
}
interface DetailsMovie {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: RatingsMovie[];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dVD: string;
  boxOffice: string;
  production: string;
  website: string;
  response: "True";
}

interface AuthValue {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export type {
  MovieApi,
  ResponseMovieApi,
  Movie,
  ResponseMovie,
  DetailsMovieApi,
  DetailsMovie,
  AuthValue,
};
