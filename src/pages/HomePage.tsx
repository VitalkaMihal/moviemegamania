import React, { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchMovies, moviesSelectors, useAppDispatch } from "store";
import { useDispatch, useSelector } from "react-redux";
import { json } from "stream/consumers";

export const HomePage = () => {
  const [films, setFilms] = useState<any>({});

  // const {movies} = useAppDispatch(moviesSelectors);
  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=war&page=1&apikey=22808c07")
      .then((response) => response.json())
      .then(setFilms);
  }, []);

  console.log(films.Search);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>HomePage</h1>
      {/* <img src={movies && movies.Search[0]?.Poster} alt="" height={200} width={150} /> */}
      <Link to={ROUTE.FAVORITES}>favorites</Link>
      <Link to={ROUTE.SING_IN}>sing-in</Link>
      <Link to={ROUTE.SING_UP}>sing-up</Link>
      <Link to={ROUTE.RESET_PASSWORD}>reset-password</Link>
      <Link to={ROUTE.TRENDS}>trends</Link>
      <Link to={ROUTE.SEARCH}>search</Link>
      <Link to={ROUTE.SETTINGS}>account</Link>
      <Link to={generatePath(ROUTE.DETAILS, { movie: "42" })}>
        <h1>DetailsPage</h1>
      </Link>
    </div>
  );
};
