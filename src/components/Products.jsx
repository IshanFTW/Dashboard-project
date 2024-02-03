import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
        <p>Products page</p>
        <Link to={"/"} className='underline'>Go to Dashboard</Link>
    </div>  
  )
}

export default Products