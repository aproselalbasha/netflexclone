import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secoundcopntainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black ">
      <div className="-mt-80  relative z-99 ">
        <Movielist title={"now playing"} movies={movies.nowplaying} />
        <Movielist title={"POPULAR"} movies={movies.popluarmovies} />
      </div>

      <Movielist title={"Upcomming"} movies={movies.upcomming} />
    </div>
  );
};

export default Secoundcopntainer;
