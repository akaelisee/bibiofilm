import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Views/home'
import Login from '../Views/login'
import NoPage from '../Views/noPage'
import PagePwdForget from '../Views/pagePwdForget'
import Register from '../Views/register'

const Router = () => {
    return(
        <Routes> 
          <Route path='/' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/password_rest' element={<PagePwdForget />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
    )
}

export default Router
