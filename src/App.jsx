import React from 'react'
import Counter from './components/Counter'
import RootLayout from'./components/rootLayout/RootLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import PageNotFound from './components/PageNotFound'
import Product from './components/Product'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout />}>
        {/* <Route path='/' element={<Counter />}/> */}
        <Route path='/' element={<Product />}/>
        <Route path='/cart' element={<Cart />}/>
      </Route>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
