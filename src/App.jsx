import { useState } from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router'
import Catalog from './components/catalog/Catalog'
import Details from './components/details/Details'
import Register from './components/register/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/games/:gameId' element={<Details />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
