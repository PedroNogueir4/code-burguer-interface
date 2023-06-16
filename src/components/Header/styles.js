import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 17%;
  height: 3.6rem;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
`
export const NavigationContainer = styled.div`
  display: flex;
  gap: 20px;
`
export const ButtonNavigate = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 15px;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
`
export const ContainerRight = styled.div`
  width: 19%;
  display: flex;
  align-items: center;
  img {
    height: 20px;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    margin-right: 15px;
    padding-top: 3px;
  }
`
export const User = styled.div`
  display: flex;
  align-items: center;
  border-left: 0.5px solid #bababa;
  padding-left: 13px;
  height: 100%;
  font-size: 8px;
  color: #555555;
  div {
    padding-left: 8px;
    font-size: 13px;
  }
`
export const Logout = styled.a`
  color: #9758a6;
  font-size: 15px;
  cursor: pointer;
`
