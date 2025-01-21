import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movies }) => {
  return (
    <div className="px-6 bg-transparent ">
      <h1 className="py-4 text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex ">
          {movies &&
            movies.map((movie, index) => (
              <Moviecard key={index} posterpath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
