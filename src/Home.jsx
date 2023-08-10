import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
       

        <div>Hello! This is Home</div>
        <Outlet />
    
    </>
  )
}

export default Home