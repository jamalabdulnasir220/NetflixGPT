import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-24 ">
      <h1 className="text-lg md:text-xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none cursor-pointer overflow-y-hidden ">
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
