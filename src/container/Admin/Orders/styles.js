import { styled } from 'styled-components'
import ReactSelect from 'react-select'

export const Container = styled.div`
  min-height: 100vh;
  width: 83%;
  background: #efefef;
  padding: 20px;
`
export const ReactSelectStyles = styled(ReactSelect)`
  max-width: 260px;
  .css-13cymwt-control {
    cursor: pointer;
  }
`
export const Menu = styled.div`
  background: #efefef;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 29px;
`
export const LinkMenu = styled.a`
  color: #323d5d;
  border-bottom: ${props => (props.isActive ? '2px solid #9758A6' : 'none')};
  font-weight: ${props => (props.isActive ? 'bold' : '400')};
  padding-bottom: 7px;
  cursor: pointer;
`
