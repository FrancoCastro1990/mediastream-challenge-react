import { useState } from 'react'

export const useMovie = () => {
    const [allMovies, setAllMovies] = useState([])
    const [filterMovies, setFilterMovies] = useState([])

    const handleMovieFetch = async () => {
        await fetch('http://localhost:3001/movies?_limit=50')
            .then(res => res.json())
            .then(json => {
                setAllMovies(json)
                setFilterMovies(json)
            })
            .catch(() => {
                console.log('Run yarn movie-api for fake api')
            })
    }

    const filterMoviesByGenre = (genre) => {
        if (genre === 'all') {
            setFilterMovies(allMovies)
        } else {
            setFilterMovies(allMovies.filter(movie => movie.genres.includes(genre)))
        }
    }

    const orderMoviesByYears = () => {
        const filterByYear = filterMovies.sort((a, b) => Number(a.year) - Number(b.year)).map(movie => movie);
        setFilterMovies(filterByYear);
    }

    return { movies: filterMovies, handleMovieFetch, filterMoviesByGenre, orderMoviesByYears }
}
