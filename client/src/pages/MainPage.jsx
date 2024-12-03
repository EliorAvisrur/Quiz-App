import React from 'react'
import Menu from '../layout/Menu'

const MainPage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold italic text-white">
          Coding Quiz App
        </h1>
        <Menu/>
      </div>
    </div>
  )
}

export default MainPage