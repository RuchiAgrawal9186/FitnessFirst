import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  const total = useSelector(state=> state.dataReducer.total)
  console.log(total)
  return (
    <div className='text-white w-full flex m-5 '>
      <h2 className='mx-5 px-9 py-3 rounded-xl bg-orange-600'> <Link to ={'/admin'}>Users {}</Link></h2>
      <h2 className='mx-5 px-9 py-3 rounded-xl bg-orange-600'>Total Cash : {total}</h2>
    </div>
  )
}

export default AdminNavbar
