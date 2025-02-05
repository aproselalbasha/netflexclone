import React from "react";
import { POSTER_URL } from "./utlils/constant";

const Moviecard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className="w-32 pr-5 md:w-44  pr-4 ">
      <div className=" ">
        {<img src={POSTER_URL + posterpath} alt="posterpath" />}
      </div>
    </div>
  );
};

export default Moviecard;
