import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { useNavigate } from 'react-router-dom'

import { Container, EditIconStyle } from './styles'

import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CancelIcon from '@mui/icons-material/Cancel'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import paths from '../../../constants/paths'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

function ListProducts() {
  const [products, setProducts] = useState([])
  const classes = useStyles()
  const navigate = useNavigate()

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data)
    }
    loadProducts()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: '#228B22' }} />
    }
    return <CancelIcon style={{ color: '#CC1717' }} />
  }

  function editProduct(product) {
    navigate(paths.EditProducts, { state: product })
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell align="center">Editar produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell align="center" component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center">
                  {formatCurrency(product.price)}
                </TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell align="center">
                  <img src={product.url} />
                </TableCell>
                <TableCell align="center">
                  <EditIconStyle onClick={() => editProduct(product)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
