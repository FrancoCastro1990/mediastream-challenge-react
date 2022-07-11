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
import { MovieItem } from './components/MovieItem'
import { CartItem } from './components/CartItem'
import { useCart } from './hooks/useCart'

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

  const {
    cart,
    addToCart,
    getTotal,
    onDecrementQuantity,
    onIncrementQuantity
  } = useCart();

  return (
    <section className="exercise01">
      <div className="movies__list">
        <ul>
          {movies.map((movie, index) => (
            <MovieItem movie={movie} addToCart={addToCart} key={`movie_list_item_${index}`} />
          ))}
        </ul>
      </div>
      <div className="movies__cart">
        <ul>
          {cart.map((cartItem, index) => (
            <CartItem
              cartItem={cartItem}
              index={index}
              onDecrementQuantity={onDecrementQuantity}
              onIncrementQuantity={onIncrementQuantity}
              key={`movie_card_item_${index}`} />
          ))}
        </ul>
        <div className="movies__cart-total">
          <p>Total: ${getTotal()}</p>
        </div>
      </div>
    </section>
  )
} 