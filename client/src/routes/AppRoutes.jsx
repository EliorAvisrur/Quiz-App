import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from '../pages/MainPage'
import Game from '../pages/Game'
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/game' element={<Game/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default AppRoutes