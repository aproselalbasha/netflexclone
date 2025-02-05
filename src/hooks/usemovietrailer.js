import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../components/utlils/constant";
import { addtrailervideo } from "../components/utlils/movieslice";

const useMovietrailer = (movieid) => {
  const trailervideo = useSelector((store) => store.movies.trailervideos);
  const dispatch = useDispatch();
  const getmovievideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?language=en-US",
      API_options
    );
    const json = await data.json();

    const filterdata = json.results?.filter(
      (videos) => videos?.type === "Trailer"
    );
    const trailer = filterdata.length ? filterdata[0] : json.results[0];

    dispatch(addtrailervideo(trailer));
  };
  console.log(trailervideo);
  useEffect(() => {
    !trailervideo && getmovievideos();
  }, []);
};

export default useMovietrailer;
