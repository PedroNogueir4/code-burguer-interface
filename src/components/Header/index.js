import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import {
  Container,
  User,
  ContainerRight,
  NavigationContainer,
  Logout,
  ButtonNavigate
} from './styles'
import userImg from '../../assets/userImg.png'
import cartImg from '../../assets/cartImg.png'
import paths from '../../constants/paths'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const { userData, logout } = useUser()
  const userLogout = () => {
    logout()
    navigate(paths.Login)
  }

  return (
    <Container>
      <NavigationContainer>
        <ButtonNavigate
          onClick={() => {
            navigate(paths.Home)
          }}
          isActive={location.pathname === '/'}
        >
          Home
        </ButtonNavigate>
        <ButtonNavigate
          onClick={() => {
            navigate(paths.Products)
          }}
          isActive={location.pathname === '/produtos'}
        >
          Ver produtos
        </ButtonNavigate>
      </NavigationContainer>
      <ContainerRight>
        <button onClick={() => navigate(paths.Cart)}>
          <img src={cartImg} />
        </button>
        <User>
          <img style={{ marginRight: '10px' }} src={userImg} />
          <div>
            <p>Olá, {userData.name}</p>
            <Logout onClick={userLogout}>Sair</Logout>
          </div>
        </User>
      </ContainerRight>
    </Container>
  )
}
