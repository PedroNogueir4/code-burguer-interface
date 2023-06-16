import { styled } from 'styled-components'

export const ContainerProducts = styled.div`
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  padding: 16px;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
`
export const Image = styled.img`
  width: 120px;
  border-radius: 10px;
`
export const ProductName = styled.p`
  font-size: 15px;
  line-height: 19px;
`
export const ProductPrice = styled.h4`
  margin-top: 20px;
  font-size: 17px;
`
