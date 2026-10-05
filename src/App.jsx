import { useState } from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router'
import Catalog from './components/catalog/Catalog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
