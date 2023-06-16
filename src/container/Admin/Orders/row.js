import React from 'react'
import formatCurrency from '../../../utils/formatCurrency'
import formatDate from '../../../utils/formatDate'
import api from '../../../services/api'
import status from './order-status'

import { ReactSelectStyles } from './styles'

import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

function Row({ row, orders, setOrders }) {
  const [open, setOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const classes = useRowStyles()

  async function setNewStatus(id, status) {
    setIsLoading(true)
    try {
      await api.put(`orders/${id}`, { status })

      const newOrders = orders.map(order => {
        return order._id === id ? { ...order, status } : order
      })
      setOrders(newOrders)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{formatDate(row.date)}</TableCell>
        <TableCell>
          <ReactSelectStyles
            options={status.filter(sts => sts.value !== 'Todos')}
            menuPortalTarget={document.body}
            placeholder="Status"
            defaultValue={status.find(sts => sts.value === row.status) || null}
            onChange={newStatus => {
              setNewStatus(row.orderId, newStatus.value)
            }}
            isLoading={isLoading}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Produto</TableCell>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Preço</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map(productRow => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.name}
                      </TableCell>
                      <TableCell>{productRow.quantity}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                      <TableCell>{formatCurrency(productRow.price)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default Row

Row.propTypes = {
  orders: PropTypes.array,
  setOrders: PropTypes.func,
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })
    ).isRequired
  }).isRequired
}
