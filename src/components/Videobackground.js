import React, { useEffect } from "react";
import { API_options } from "../components/utlils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addtrailervideo } from "./utlils/movieslice";
import usemovietrailer from "../hooks/usemovietrailer";

const Videobackground = ({ movieid }) => {
  const trailervideo = useSelector((store) => store.movies?.trailervideos);
  usemovietrailer(movieid);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailervideo?.key}?autoplay=1&loop=1&playlist=${trailervideo.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Videobackground;
