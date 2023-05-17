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
  Ratings: [
    {
      Source: string;
      Value: string;
    },
    {
      Source: string;
      Value: string;
    },
    {
      Source: string;
      Value: string;
    },
  ];
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
  ratings: [
    {
      source: string;
      value: string;
    },
    {
      source: string;
      value: string;
    },
    {
      source: string;
      value: string;
    },
  ];
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

export type { MovieApi, ResponseMovieApi, Movie, ResponseMovie, DetailsMovieApi, DetailsMovie };
