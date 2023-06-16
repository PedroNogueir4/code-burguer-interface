import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import { Container, Resume, Data } from './styles'
import { Button } from '../Button'

export function CartResume() {
  const { cartProducts } = useCart()
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  useEffect(() => {
    const sumAllPrice = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setFinalPrice(sumAllPrice)
  }, [cartProducts, deliveryTax])

  const sendOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })
    try {
      const { status } = await api.post(
        'orders',
        { products: order },
        { validateStatus: () => true }
      )
      if (status === 201) {
        toast.success('Pedido Realizado com Sucesso!')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha ao realizar pedido!,Tente novamente')
    }
  }

  return (
    <Container>
      <Resume>
        <h4>Resumo do pedido</h4>
        <Data>
          <p>Itens</p>
          <p>{formatCurrency(finalPrice)}</p>
          <p>Taxa de entrega</p>
          <p>{formatCurrency(deliveryTax)}</p>
        </Data>
        <div className="totally">
          <h2>Total</h2>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Resume>
      <Button onClick={sendOrder} style={{ width: '100%' }}>
        Finalizar Pedido
      </Button>
    </Container>
  )
}
