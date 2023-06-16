import React from 'react'

import homeLogo from '../../assets/homeLogo.png'
import { Container, ContainerLogo } from './styles'
import { CategoryCarousel, OfferCarousel, Header } from '../../components'

export function Home() {
  return (
    <Container>
      <Header />
      <ContainerLogo src={homeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}
