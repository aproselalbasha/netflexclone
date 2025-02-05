import React from "react";
import { useSelector } from "react-redux";
import Movielist from "../Movielist";

const Gptmoviesuggest = () => {
  const { movieresult, moviename } = useSelector((store) => store.gpt);
  if (!moviename) return null;
  console.log(movieresult[0]);
  return (
    <div>
      <div className="bg-gray-950 text-white p-5 m-4 bg-opacity-90">
        {moviename.map((moviename, index) => (
          <Movielist
            key={moviename}
            title={moviename}
            movies={movieresult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Gptmoviesuggest;
