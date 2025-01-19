import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/usenowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secoundcopntainer from "./Secoundcopntainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secoundcopntainer />
    </div>
  );
};

export default Browse;
