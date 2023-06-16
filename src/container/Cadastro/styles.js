import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const ContainerLeft = styled.div`
  width: 60vw;
  height: 100vh;
  img {
    height: 100%;
    width: 100%;
  }
`
export const ContainerMain = styled.div`
  background: #373737;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  padding: 15%;
  padding-top: 8%;
  padding-bottom: 3%;
  height: 100vh;

  img {
    width: 54%;
    height: 13%;
    margin-left: 21%;
  }
  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-left: 36%;
    margin-top: 3%;
    color: white;
  }
`
export const Label = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 6%;
  margin-bottom: 1%;

  color: #ffffff;
`

export const Inputs = styled.input`
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  outline: none;
  height: 30px;
  width: 85%;
  padding-left: 8px;
`

export const SignupLInk = styled.a`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 7%;
  color: #ffffff;
  a {
    cursor: pointer;
    text-decoration-line: underline;
    margin-left: 5px;
  }
`
