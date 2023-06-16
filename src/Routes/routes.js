import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Login, Home, Cadastro, Products, Cart, Admin } from '../container'

import { PrivateRoute, RoutesAdmin } from './private-routes'
import paths from '../constants/paths'

function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path={paths.Home} element={<Home />} />
          <Route path={paths.Products} element={<Products />} />
          <Route path={paths.Cart} element={<Cart />} />
        </Route>
        <Route element={<RoutesAdmin />}>
          <Route path={paths.Order} element={<Admin />} />
          <Route path={paths.ProductsList} element={<Admin />} />
          <Route path={paths.NewProduct} element={<Admin />} />
          <Route path={paths.EditProducts} element={<Admin />} />
        </Route>
        <Route path={paths.Login} element={<Login />} />
        <Route path={paths.Register} element={<Cadastro />} />
      </Routes>
    </Router>
  )
}

export default myRoutes
