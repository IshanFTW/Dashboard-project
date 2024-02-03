import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <p>Dashboard page</p>
        <Link to={"/products"} className='underline'>Go to Products</Link>
    </div>
  )
}

export default Dashboard