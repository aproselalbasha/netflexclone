import {
  addpopluarmovies,
  addupcomming,
} from "../components/utlils/movieslice";
import { useEffect } from "react";
import { API_options } from "../components/utlils/constant";
import { useDispatch } from "react-redux";

const useUpcomming = () => {
  const dispatch = useDispatch();
  const getupcomming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_options
    );
    const jsondata = await data.json();
    console.log(jsondata.results);
    dispatch(addupcomming(jsondata?.results));
  };
  useEffect(() => {
    getupcomming();
  }, []);
};
export default useUpcomming;
