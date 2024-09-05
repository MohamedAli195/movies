import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function RootLayOut() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default RootLayOut