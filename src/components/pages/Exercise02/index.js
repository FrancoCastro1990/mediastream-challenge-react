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
import background from "./assets/mountains.jpeg";

export default function Exercise02() {
  const [movies, setMovies] = useState([])
  const [filterMovies, setFilterMovies] = useState([])

  const [fetchCount, setFetchCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [genres, setGenres] = useState([]);

  const handleMovieFetch = () => {
    setLoading(true)
    setFetchCount(fetchCount + 1)
    console.log('Getting movies')
    fetch('http://localhost:3001/movies?_limit=50')
      .then(res => res.json())
      .then(json => {
        setMovies(json)
        setFilterMovies(json)
        setLoading(false)
      })
      .catch(() => {
        console.log('Run yarn movie-api for fake api')
      })
  }

  const handleMovieFilterFetch = () => {
    setLoading(true)
    setFetchCount(fetchCount + 1)
    console.log('Getting movies')
    fetch('http://localhost:3001/genres')
      .then(res => res.json())
      .then(json => {
        setGenres(json)
        setLoading(false)
      }).catch(() => {
        console.log('Run yarn movie-api for fake api')
      })
  }

  useEffect(() => {
    handleMovieFetch()
    handleMovieFilterFetch()
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
        <div className="movie-library__actions">
          <select name="genre" placeholder="Search by genre..."
            onChange={(e) => {
              const genre = e.target.value
              if (genre === 'all') {
                setFilterMovies(movies)
              } else {
                setFilterMovies(movies.filter(movie => movie.genres.includes(genre)))
              }
            }}
          >
            <option value="all">All</option>
            {genres.map((genre, index) => <option key={`movie_library_list_${index}`} value={genre}>{genre}</option>)}
          </select>
          <button
            onClick={() => {
              const filterByYear = filterMovies.sort((a, b) => Number(a.year) - Number(b.year)).map(movie => movie);
              setFilterMovies(filterByYear);
            }}
          >Order Descending</button>
        </div>
        {loading ? (
          <div className="movie-library__loading">
            <p>Loading...</p>
            <p>Fetched {fetchCount} times</p>
          </div>
        ) : (
          <div className="movie-library__list">
            {filterMovies.map(movie => (
              <div key={`movie_library_list_${movie.id}`} className="movie-library__card">
                <img src={movie.posterUrl} alt={movie.title} />
                <div className="movie-library__card-backbround">
                </div>
                <ul>
                  <li>{movie.title}</li>
                  <li>{movie.genres.join(', ')}</li>
                  <li>{movie.year}</li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}