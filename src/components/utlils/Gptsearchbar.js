import React from "react";
import lang from "./languageconstant";
import { SUPPORTED_LANGUAGE } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { changelanguage } from "./configslice";

const Gptsearchbar = () => {
  const dispatch = useDispatch();
  const langselect = useSelector((store) => store.config.lang);
  const handlelangchange = (e) => {
    dispatch(changelanguage(e.target.value));
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black w-1/2  grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-3 col-span-9"
          placeholder={lang[langselect].gptsearchplaceholder}
        />
        <button className="py-2 px-2 bg-red-600 text-white rounded-lg col-span-3 m-3">
          {lang[langselect].search}
        </button>
      </form>
      <div className="mx-4 mt-6">
        <select onChange={handlelangchange}>
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
