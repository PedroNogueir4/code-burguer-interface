import { styled } from 'styled-components'

export const Container = styled.div`
  width: 27%;
`
export const Resume = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 35px 20px;
  padding-bottom: 15px;
  margin-bottom: 6%;
  .totally {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    p {
      font-weight: bold;
      font-size: 26px;
    }
  }
`
export const Data = styled.div`
  margin-bottom: 30%;
  margin-top: 8%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 11px;
  p {
    color: #222222;
  }
`
