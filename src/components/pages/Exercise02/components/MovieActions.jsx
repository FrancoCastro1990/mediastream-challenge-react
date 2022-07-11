import React from 'react'

export const MovieActions = ({ genres = [], onFilterMoviesByGenres, onFilterMoviesByYear }) => {
    return (
        <div className="movie-library__actions">
            <select name="genre" placeholder="Search by genre..."
                onChange={(e) => {
                    const genre = e.target.value
                    onFilterMoviesByGenres(genre)
                }}
            >
                <option value="all">All</option>
                {genres.map((genre, index) => <option key={`movie_library_list_${index}`} value={genre}>{genre}</option>)}
            </select>
            <button
                onClick={() => {
                    onFilterMoviesByYear()
                }}
            >Order Descending</button>
        </div>
    )
}
