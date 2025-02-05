import { addpopluarmovies } from "../components/utlils/movieslice";
import { useEffect } from "react";
import { API_options } from "../components/utlils/constant";
import { useDispatch, useSelector } from "react-redux";

const usePopluarmovies = () => {
  const popluarmovie = useSelector((store) => store.movies.addpopluarmovies);
  const dispatch = useDispatch();
  const getpopluarmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_options
    );
    const jsondata = await data.json();

    dispatch(addpopluarmovies(jsondata?.results));
  };
  useEffect(() => {
    !popluarmovie && getpopluarmovies();
  }, []);
};
export default usePopluarmovies;
