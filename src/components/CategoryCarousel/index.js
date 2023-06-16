import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import api from '../../services/api'
import Categories from '../../assets/CATEGORIAS.png'
import { Container, CategoryImg, Button, Image, ContainerItens } from './styles'
import paths from '../../constants/paths'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategory()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 300, itemsToShow: 2 },
    { width: 500, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Categories} alt="logo da categoria" />
      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <Image src={category.url} />
              <Button to={paths.Products} state={{ categoryId: category.id }}>
                {category.name}
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
