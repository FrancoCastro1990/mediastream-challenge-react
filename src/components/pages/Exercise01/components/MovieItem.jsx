import React from 'react'

export const MovieItem = ({movie,addToCart}) => {
  return (
    <li className="movies__list-card" >
    <ul>
      <li>
        ID: {movie.id}
      </li>
      <li>
        Name: {movie.name}
      </li>
      <li>
        Price: ${movie.price}
      </li>
    </ul>
    <button onClick={() => {
        addToCart(movie)
    }}>
      Add to cart
    </button>
  </li>
  )
}
