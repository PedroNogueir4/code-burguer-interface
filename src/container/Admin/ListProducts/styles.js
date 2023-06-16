import { styled } from 'styled-components'
import EditIcon from '@mui/icons-material/Edit'

export const Container = styled.div`
  min-height: 100vh;
  width: 83%;
  background: #efefef;
  padding: 20px;
  img {
    width: 13%;
    border-radius: 12px;
  }
`
export const EditIconStyle = styled(EditIcon)`
  cursor: pointer;
  color: #323d5d;
`
