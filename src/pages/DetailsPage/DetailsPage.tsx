import React, { useEffect, useState } from "react";
import { transformDetailsMovie } from "mappers";
import { useParams } from "react-router-dom";
import { DetailsMovie } from "types";

export const DetailsPage = () => {
  const { imdbID } = useParams();
  const [details, setDetails] = useState({} as DetailsMovie);
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=22808c07`)
      .then((response) => response.json())
      .then((response) => transformDetailsMovie(response))
      .then(setDetails);
  }, [imdbID]);
  return (
    <div>
      <h1>{details.title}</h1>
    </div>
  );
};
