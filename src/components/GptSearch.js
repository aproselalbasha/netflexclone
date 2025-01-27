import React from "react";
import Gptsearchbar from "./utlils/Gptsearchbar";
import Gptmoviesuggest from "./utlils/Gptmoviesuggest";
import { BG_URL } from "./utlils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img src={BG_URL} alt="backgoundimg" />
      </div>
      <Gptsearchbar />
      <Gptmoviesuggest />
    </div>
  );
};

export default GptSearch;
