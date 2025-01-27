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
    <div>
      <Videotitle title={original_title} overview={overview} />
      <Videobackground movieid={id} />
    </div>
  );
};

export default Maincontainer;
