import React, { useRef } from "react";
import lang from "./languageconstant";
import { API_options, SUPPORTED_LANGUAGE } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { changelanguage } from "./configslice";
import { gptsearchmovies } from "../utlils/gptsearchSlice";

import Openai from "../utlils/openai";

const Gptsearchbar = () => {
  const searchtext = useRef(null);
  //search movie in TMDB
  const searchmovietmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    return json.results;
  };
  const handlegptsearch = async () => {
    const gptQuery =
      "act as a movie recommendation system and suggest some movies  for a query" +
      searchtext.current.value +
      ". only names of five movie ,comma seperated like the example result given ahade.example result:don,sholy,tamilpadam,suraraipodru,solder";
    const gptresult = await Openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const movieresult = gptresult?.choices[0]?.message?.content?.split(",");

    const promisearray = movieresult.map((movie) => searchmovietmdb(movie));
    const tmdbresult = await Promise.all(promisearray);
    console.log(tmdbresult);
    dispatch(
      gptsearchmovies({
        moviename: movieresult,
        movieresult: tmdbresult,
      })
    );
  };
  const dispatch = useDispatch();
  const langselect = useSelector((store) => store.config.lang);
  const handlelangchange = (e) => {
    dispatch(changelanguage(e.target.value));
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-3/4 md:w-1/2 bg-black grid grid-cols-12 mt-[17%] md:mt-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          type="text"
          className="p-4 m-3 col-span-9"
          placeholder={lang[langselect].gptsearchplaceholder}
        />
        <button
          className="py-2 px-2 bg-red-600 text-white rounded-lg col-span-3 m-3"
          onClick={handlegptsearch}
        >
          {lang[langselect].search}
        </button>
      </form>
      <div className="   mx-4 mt-6 ">
        <select
          className="relative top-24 md:top-0"
          onChange={handlelangchange}
        >
          {SUPPORTED_LANGUAGE.map((lang) => {
            return (
              <option value={lang.identifier} key={lang.identifier}>
                {lang.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Gptsearchbar;
