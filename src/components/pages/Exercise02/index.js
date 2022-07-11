/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Exercise 02: Movie Library
 * We are trying to make a movie library for internal users. We are facing some issues by creating this, try to help us following the next steps:
 * !IMPORTANT: Make sure to run yarn movie-api for this exercise
 * 1. We have an issue fetching the list of movies, check why and fix it (handleMovieFetch)
 * 2. Create a filter by fetching the list of gender (http://localhost:3001/genres) and then loading
 * list of movies that belong to that gender (Filter all movies).
 * 3. Order the movies by year and implement a button that switch between ascending and descending order for the list
 * 4. Try to recreate the user interface that comes with the exercise (exercise02.png)
 * 
 * You can modify all the code, this component isn't well designed intentionally. You can redesign it as you need.
 */

import "./assets/styles.css";
import { useEffect, useState } from "react";
import { useMovie } from "./hooks/useMovie";
import { useGenre } from "./hooks/useGenre";
import background from "./assets/mountains.jpeg";
import { MovieActions } from "./components/MovieActions";
import { MovieList } from "./components/MovieList";

export default function Exercise02() {


  const [loading, setLoading] = useState(false)


  const { movies, handleMovieFetch, filterMoviesByGenre, orderMoviesByYears } = useMovie()
  const { genres, handleMovieFilterFetch } = useGenre();


  useEffect(() => {
    setLoading(true)
    handleMovieFetch().finally(() => setLoading(false))
    handleMovieFilterFetch().finally(() => setLoading(false))
  }, [])


  return (
    <section className="movie-library">
      <img src={background} alt="background" className="movie-library__background" />
      <div
        className="movie-library__container"
      >
        <h1 className="movie-library__title">
          Movie Library
        </h1>
        <MovieActions
          genres={genres}
          onFilterMoviesByGenres={filterMoviesByGenre}
          onFilterMoviesByYear={orderMoviesByYears}
        />
        {loading ? (
          <div className="movie-library__loading">
            <p>Loading...</p>
          </div>
        ) : (
          <MovieList
            movies={movies}
          />
        )}
      </div>
    </section>
  )
}