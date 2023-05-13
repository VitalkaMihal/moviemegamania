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

export type { MovieApi, ResponseMovieApi, Movie, ResponseMovie };
