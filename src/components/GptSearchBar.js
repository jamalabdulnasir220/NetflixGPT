import React, { useRef, useState } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { model } from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
import ButtonLoader from "./ButtonLoader";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const languages = useSelector((store) => store.config.lang);

  const searchMoviesTmd = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    setIsLoading(true);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      "only give me names of five movies comma separated like the example Power, Ghost, Harry Potter, Merlin, Game of Thrones";

     

    const result = await model.generateContent(gptQuery);

    if (!result.response) return "No response Found!";

    const gptMoviesNames = result.response.text().split(",");
    

    const promiseArray = gptMoviesNames.map((movie) => searchMoviesTmd(movie));

    const tmdbMovies = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResults({
        gptMovieNames: gptMoviesNames,
        gptTmdbMovies: tmdbMovies,
      })
    );
    setIsLoading(false);
     searchText.current.value = ""
  };

  return (
    <div className="pt-[60%] md:pt-[10%] ">
      <form
        className=" w-full md:bg-black md:w-1/2 md:flex-row  flex flex-col items-center p-2 gap-2 m-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[languages].PlaceholderText}
          className="p-4 w-full  flex-1 outline-none rounded-lg"
        />
        <button
          className="py-2 px-4 bg-red-700 rounded-lg text-center flex items-center justify-center w-36"
          onClick={handleGptSearch}
        >
          {isLoading ? (
            <ButtonLoader title={lang[languages].search} />
          ) : (
            lang[languages].search
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
