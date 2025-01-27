import { addnowpalyingmovies } from "../components/utlils/movieslice";
import { useEffect } from "react";
import { API_options } from "../components/utlils/constant";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
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
    getnowplayingmovies();
  }, []);
};
export default useNowPlayingMovies;
