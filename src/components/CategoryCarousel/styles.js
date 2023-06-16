import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efefef;
  padding: 15px 0;
  gap: 20px;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`
export const CategoryImg = styled.img`
  width: 25%;
`
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`
export const Button = styled(Link)`
  background: #9758a6;
  height: 2.5rem;
  box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
    0px 20px 40px rgba(151, 88, 166, 0.24);

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;

  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`
