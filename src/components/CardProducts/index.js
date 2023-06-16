import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { ContainerProducts, Image, ProductName, ProductPrice } from './styles'
import paths from '../../constants/paths'

export function CardProducts({ product }) {
  const { putCartProduct } = useCart()
  const navigate = useNavigate()

  return (
    <ContainerProducts>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button
          onClick={() => {
            putCartProduct(product)
            navigate(paths.Cart)
          }}
          style={{ width: '100%' }}
        >
          Adicionar
        </Button>
      </div>
    </ContainerProducts>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
