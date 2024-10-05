import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 top-0 left-0 w-screen h-screen ">
        <img className="h-full w-full object-cover md:w-screen md:object-cover" src={BACKGROUND_IMAGE} alt="background-image" />
      </div>
      <div className="w-full relative overflow-x-hidden">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
