import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Views/home'
import NoPage from '../Views/noPage'

const Router = () => {
    return(
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
    )
}

export default Router
