import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
//   console.log(movies);
  return (
    <div className="px-24 ">
      <h1 className="text-xl py-3 text-white">{title}</h1>
      <div className="flex overflow-hidden scrollbar-hide hover:overflow-x-scroll hover:scrollbar-thin hover:scrollbar-thumb-black hover:scrollbar-track-gray-300">
        <div className="flex items-center gap-x-3">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              movie={movie}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
