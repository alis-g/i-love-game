import { useState } from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { Route, Routes, useNavigate } from 'react-router'
import Catalog from './components/catalog/Catalog'
import Details from './components/details/Details'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Create from './components/create/Create'
import Logout from './logout/Logout'
import Edit from './components/edit/Edit'
import { authApi } from './api'
import AuthContext from './context/auth-context'


function App() {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(null)

    const register = async (userData) => {
        try {
            const result = await authApi.register(userData)
            setAuth(result)
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const login = async (userData) => {
        try {
            const result = await authApi.login(userData)
            setAuth(result)
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const logoutAction = () => {
        setAuth(null)
    }

    const contextValue = {
        accessToken: auth?.access_token,
        user: auth?.user,
        isAuthenticated: !!auth,
        register,
        login,
        
    }

    return (
        <AuthContext.Provider value={contextValue}>
            <Header isAuth={!!auth} />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/games/create' element={<Create />} />
                <Route path='/games/:gameId' element={<Details />} />
                <Route path='/games/:gameId/edit' element={<Edit />} />
                <Route path='/register' element={<Register onRegister={register} />} />
                <Route path='/login' element={<Login onLogin={login} />} />
                <Route path='/logout' element={<Logout onLogout={logoutAction} />} />
            </Routes>

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
