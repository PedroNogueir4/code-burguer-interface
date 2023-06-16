import React from 'react'
import { useUser } from '../../hooks/UserContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, MenuOptions, Button, ContainerUser, Logout } from './styles'

import sacolaAdm from '../../assets/sacolaAdm.png'
import addProdutoAdm from '../../assets/addProdutoAdm.png'
import produtosAdm from '../../assets/produtosAdm.png'
import userImg from '../../assets/userIcon.png'
import paths from '../../constants/paths'

export function SideMenu() {
  const { logout, userData } = useUser()
  const navigate = useNavigate()
  const location = useLocation()

  function adminLogout() {
    logout()
    navigate(paths.Login)
  }

  return (
    <Container>
      <MenuOptions>
        <hr></hr>
        <Button isActive={paths.Order === location.pathname} to={paths.Order}>
          <img src={sacolaAdm} />
          Pedidos
        </Button>
        <Button
          isActive={paths.ProductsList === location.pathname}
          to={paths.ProductsList}
        >
          <img src={produtosAdm} />
          Produtos
        </Button>
        <Button
          isActive={paths.NewProduct === location.pathname}
          to={paths.NewProduct}
        >
          <img src={addProdutoAdm} />
          Adicionar Produto
        </Button>
        <hr></hr>
      </MenuOptions>
      <ContainerUser>
        <img src={userImg} />
        <div>
          <p>Olá, {userData.name}</p>
          <Logout onClick={() => adminLogout()}>Sair</Logout>
        </div>
      </ContainerUser>
    </Container>
  )
}
