import React from 'react'

export const CartItem = ({cartItem,index , onDecrementQuantity, onIncrementQuantity}) => {
  return (
    <li className="movies__cart-card" >
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
        onDecrementQuantity(index)
      }}>
        -
      </button>
      <span>
        {cartItem.quantity}
      </span>
      <button onClick={() => {
         onIncrementQuantity(index)
      }}>
        +
      </button>
    </div>
  </li>
  )
}
