import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = update => {
    localStorage.setItem('codeburguer:cartData', JSON.stringify(update))
  }

  const putCartProduct = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)
    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = cartProducts
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }
    updateLocalStorage(newCartProducts)
  }

  const deleteProducts = productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)

    setCartProducts(newCart)

    updateLocalStorage(newCart)
  }

  const addQuantityItem = productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }

  const removeQuantity = productId => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCartProducts(newCart)

      updateLocalStorage(newCart)
    } else {
      deleteProducts(productId)
    }
  }

  useEffect(() => {
    const getCartProducts = async () => {
      const cartInfo = localStorage.getItem('codeburguer:cartData')

      if (cartInfo) {
        setCartProducts(JSON.parse(cartInfo))
      }
    }

    getCartProducts()
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putCartProduct,
        addQuantityItem,
        removeQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
