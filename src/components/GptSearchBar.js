import React from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languages = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%]">
      <form className="bg-black w-1/2 flex items-center p-2 gap-2 m-auto">
        <input
          type="text"
          placeholder={lang[languages].PlaceholderText}
          className="p-4  flex-1"
        />
        <button className="py-2 px-4 bg-red-700 rounded-lg text-center">
          {lang[languages].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
