import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

  const {gptTmdbMovies, gptMovieNames} = useSelector(store => store.gpt)

  if(!gptMovieNames) return null;

  return (
    <div className='p-4 m-4 bg-black bg-opacity-90 text-white'>
      {
        gptMovieNames?.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={gptTmdbMovies[index]}/>)
      }
    </div>
  )
}

export default GptMovieSuggestions
