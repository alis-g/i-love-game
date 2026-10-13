import { useState } from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router'
import Catalog from './components/catalog/Catalog'
import Details from './components/details/Details'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Create from './components/create/Create'
import Logout from './logout/Logout'


function App() {
  const [user, setUser] = useState(null)

  const userAuthHandler = (userData) => {
    setUser(userData)
  }

  const logoutAction = () => {
    setUser(null)
  }

  return (
    <>
      <Header isAuth = {!!user} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/games/:gameId' element={<Details />} />
        <Route path='/login' element={<Login onLogin={userAuthHandler}/>} />
        <Route path='/logout' element={<Logout onLogout={logoutAction}/>} />
        <Route path='/register' element={<Register onRegister={userAuthHandler} />} />
        <Route path='/games/create' element={<Create  />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
