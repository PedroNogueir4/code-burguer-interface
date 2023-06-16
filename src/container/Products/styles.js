import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #efefef;
`
export const ContainerLogo = styled.img`
  width: 100vw;
  height: 55vh;
`
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 1%;
`
export const CategoryButton = styled.button`
  color: ${props => (props.isActive ? '#9758A6' : '#9A9A9D')};
  background: none;
  border: none;
  border-bottom: ${props => (props.isActive ? '2px solid #9758A6' : 'none')};
  padding-bottom: 5px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`
export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 26%);
  justify-content: center;
  gap: 2.2%;
  padding: 4%;
`
