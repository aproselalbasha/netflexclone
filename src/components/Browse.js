import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/usenowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secoundcopntainer from "./Secoundcopntainer";
import usePopluarmovies from "../hooks/usePopluarmovie";
import useUpcomming from "../hooks/useUpcomming";
const Browse = () => {
  useNowPlayingMovies();
  usePopluarmovies();
  useUpcomming();
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secoundcopntainer />
    </div>
  );
};

export default Browse;
