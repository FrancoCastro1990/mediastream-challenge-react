/**
 * Exercise 01: The Retro Movie Store
 * Implement a shopping cart with the next features for the Movie Store that is selling retro dvds:
 * 1. Add a movie to the cart
 * 2. Increment or decrement the quantity of movie copies. If quantity is equal to 0, the movie must be removed from the cart
 * 3. Calculate and show the total cost of your cart. Ex: Total: $150
 * 4. Apply discount rules. You have an array of offers with discounts depending of the combination of movie you have in your cart.
 * You have to apply all discounts in the rules array (discountRules).
 * Ex: If m: [1, 2, 3], it means the discount will be applied to the total when the cart has all that products in only.
 * 
 * You can modify all the code, this component isn't well designed intentionally. You can redesign it as you need.
 */

import './assets/styles.css'
import { useState } from 'react'

export default function Exercise01() {

  const movies = [
    {
      id: 1,
      name: 'Star Wars',
      price: 20
    },
    {
      id: 2,
      name: 'Minions',
      price: 25
    },
    {
      id: 3,
      name: 'Fast and Furious',
      price: 10
    },
    {
      id: 4,
      name: 'The Lord of the Rings',
      price: 5
    }
  ]

  const discountRules = [
    {
      m: [3, 2],
      discount: 0.25
    },
    {
      m: [2, 4, 1],
      discount: 0.5
    },
    {
      m: [4, 2],
      discount: 0.1
    }
  ]

  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Star Wars',
      price: 20,
      quantity: 2
    }
  ])

  const getTotal = () => {
    let total = 0;
    cart.forEach(movie => {
      total += movie.price * movie.quantity
    })
    // Apply discount rules
    discountRules.forEach(rule => {
      const m = rule.m.map(id => cart.find(movie => movie.id === id))
      if (m.every(movie => movie)) {
        total -= total * rule.discount;
        return total;
      }
    })
    return total;
  }

  return (
    <section className="exercise01">
      <div className="movies__list">
        <ul>
          {movies.map((movie, index) => (
            <li className="movies__list-card" key={`movie_list_item_${index}`}>
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
                setCart([...cart, { ...movie, quantity: 1 }])
              }}>
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="movies__cart">
        <ul>
          {cart.map((cartItem, index) => (
            <li className="movies__cart-card" key={`movie_card_item_${index}`}>
              <ul>
                <li>
                  ID: {cartItem.id}
                </li>
                <li>
                  Name: {cartItem.name}
                </li>
                <li>
                  Price: ${cartItem.price}
                </li>
              </ul>
              <div className="movies__cart-card-quantity">
                <button onClick={() => {
                  const newCart = [...cart]
                  newCart[index].quantity--
                  if (newCart[index].quantity === 0) {
                    newCart.splice(index, 1)
                  }
                  setCart(newCart)
                }}>
                  -
                </button>
                <span>
                  {cartItem.quantity}
                </span>
                <button onClick={() => {
                  const newCart = [...cart]
                  newCart[index].quantity++
                  setCart(newCart)
                }}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="movies__cart-total">
          <p>Total: ${getTotal()}</p>
        </div>
      </div>
    </section>
  )
} 