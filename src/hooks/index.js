import React from 'react'
import PropTypes from 'prop-types'

import { UserProvider } from './UserContext'
import { CartProvider } from './CartContext'

export const AppProvider = ({ children }) => (
  <CartProvider>
    <UserProvider>{children}</UserProvider>
  </CartProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}
