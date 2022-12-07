import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import Register from '../pages/Register/Register'

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
  )
}

export default RoutesMain