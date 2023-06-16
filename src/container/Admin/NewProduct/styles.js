import { styled } from 'styled-components'
import ReactSelect from 'react-select'

export const Container = styled.div`
  display: flex;
  width: 83%;
  align-items: center;
  justify-content: center;
  background: #efefef;
  form {
    background: #565656;
    padding: 20px;
    color: white;
    border-radius: 10px;
    min-width: 20rem;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`
export const Label = styled.p`
  font-size: 14.5px;
  margin-bottom: 2px;
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #c3c3c3;
  border-radius: 5px;
  padding: 10px;
  color: #8b8b8b;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`
export const Inputs = styled.input`
  border-radius: 8px;
  width: 100%;
  height: 2rem;

  padding: 5px;
  border: none;
  outline: none;
`
export const ReactSelectS = styled(ReactSelect)`
  .css-1nmdiq5-menu {
    color: black;
  }
`
