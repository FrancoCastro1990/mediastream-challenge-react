import { useState } from 'react'

export const useGenre = () => {
    const [genres, setGenres] = useState([]);

    const handleMovieFilterFetch = async () => {
        await fetch('http://localhost:3001/genres')
            .then(res => res.json())
            .then(json => {
                setGenres(json)
            }).catch(() => {
                console.log('Run yarn movie-api for fake api')
            })
    }

    return { genres, handleMovieFilterFetch }
}
