import { addnowpalyingmovies } from "../components/utlils/movieslice";
import { useEffect } from "react";
import { API_options } from "../components/utlils/constant";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const nowplaying = useSelector((store) => store.movies.addnowpalyingmovies);
  const dispatch = useDispatch();
  const getnowplayingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_options
    );
    const jsondata = await data.json();

    dispatch(addnowpalyingmovies(jsondata.results));
  };
  useEffect(() => {
    !nowplaying && getnowplayingmovies();
  }, []);
};
export default useNowPlayingMovies;
