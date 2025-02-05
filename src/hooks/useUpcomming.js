import {
  addpopluarmovies,
  addupcomming,
} from "../components/utlils/movieslice";
import { useEffect } from "react";
import { API_options } from "../components/utlils/constant";
import { useDispatch, useSelector } from "react-redux";

const useUpcomming = () => {
  const upcomming = useSelector((store) => store.movies.upcomming);
  const dispatch = useDispatch();
  const getupcomming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_options
    );
    const jsondata = await data.json();

    dispatch(addupcomming(jsondata?.results));
  };
  useEffect(() => {
    !upcomming && getupcomming();
  }, []);
};
export default useUpcomming;
