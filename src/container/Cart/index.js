import React from 'react'

import cartLogo from '../../assets/cartLogo.png'
import { Container, ContainerLogo } from './styles'
import { CartItems, CartResume, Header } from '../../components'

export function Cart() {
  return (
    <Container>
      <Header />
      <ContainerLogo src={cartLogo} />
      <div className="container-itens">
        <CartItems />
        <CartResume />
      </div>
    </Container>
  )
}
