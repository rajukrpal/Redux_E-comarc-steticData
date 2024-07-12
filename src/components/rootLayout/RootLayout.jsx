import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <main style={{marginTop:60}}>
        <div className='px-2'>
        <Outlet />
        </div>
      </main>
    </div>
  )
}

export default RootLayout
