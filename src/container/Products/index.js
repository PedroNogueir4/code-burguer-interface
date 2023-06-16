import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import api from '../../services/api'

import productLogo from '../../assets/logoProdutos.png'
import { CardProducts, Header } from '../../components'
import {
  Container,
  ContainerLogo,
  CategoryButton,
  CategoryMenu,
  ContainerItens
} from './styles'

export function Products() {
  const { state } = useLocation()

  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategory = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategory)
    }
    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const filterProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilteredProducts(filterProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <Header />
      <ContainerLogo src={productLogo} />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              isActive={activeCategory === category.id}
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ContainerItens>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProducts product={product} key={product.id}></CardProducts>
          ))}
      </ContainerItens>
    </Container>
  )
}
