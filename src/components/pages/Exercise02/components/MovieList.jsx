import React from 'react'

export const MovieList = ({ movies = [] }) => {
    return (
        <div className="movie-library__list">
            {movies.map(movie => (
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
    )
}
