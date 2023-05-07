import React, { useState } from 'react'
import Users from '../components/User/Users'
import AdminNavbar from '../components/User/AdminNavbar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='mt-[10%]'>
      <AdminNavbar/>
      <Outlet/>
    </div>
  )
}

export default Admin
