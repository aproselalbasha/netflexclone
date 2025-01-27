import Header from "./Header";
import useNowPlayingMovies from "../hooks/usenowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secoundcopntainer from "./Secoundcopntainer";
import usePopluarmovies from "../hooks/usePopluarmovie";
import useUpcomming from "../hooks/useUpcomming";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const gptstatus = useSelector((store) => store.gpt.showgptsearch);
  useNowPlayingMovies();
  usePopluarmovies();
  useUpcomming();

  return (
    <div>
      <Header />
      {gptstatus === true ? (
        <GptSearch />
      ) : (
        <>
          <Maincontainer />
          <Secoundcopntainer />
        </>
      )}
    </div>
  );
};

export default Browse;
