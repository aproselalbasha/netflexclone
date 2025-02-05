import React from "react";
import Gptsearchbar from "./utlils/Gptsearchbar";
import Gptmoviesuggest from "./utlils/Gptmoviesuggest";
import { BG_URL } from "./utlils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img
          className="h-screen object-cover w-screen"
          src={BG_URL}
          alt="backgoundimg"
        />
      </div>
      <div className=" md:p-0">
        <Gptsearchbar />
        <Gptmoviesuggest />
      </div>
    </div>
  );
};

export default GptSearch;
