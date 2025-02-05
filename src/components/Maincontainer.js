import React from "react";
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";
import { useSelector } from "react-redux";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowplaying);
  if (!movies) return;
  const mainmovie = movies[1];

  const { original_title, overview, id } = mainmovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <Videotitle title={original_title} overview={overview} />
      <Videobackground movieid={id} />
    </div>
  );
};

export default Maincontainer;
