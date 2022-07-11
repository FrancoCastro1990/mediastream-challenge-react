import { useState } from 'react'

export const useCart = () => {

    const [cart, setCart] = useState([
        {
            id: 1,
            name: 'Star Wars',
            price: 20,
            quantity: 2
        }
    ])

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

    const addToCart = (movie) => {
        setCart([...cart, { ...movie, quantity: 1 }])
    }

    const onDecrementQuantity = (movieIndex) => {
        const newCart = [...cart]
        newCart[movieIndex].quantity--
        if (newCart[movieIndex].quantity === 0) {
            newCart.splice(movieIndex, 1)
        }
        setCart(newCart)
    }

    const onIncrementQuantity = (movieIndex) => {
        const newCart = [...cart]
        newCart[movieIndex].quantity++
        setCart(newCart)
    }
    return {
        cart,
        getTotal,
        addToCart,
        onDecrementQuantity,
        onIncrementQuantity
    }
}
