import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLy = () => {
  return (
<div>
  <h1>HOME</h1>
  <nav>Navbar</nav>
  <Outlet />
</div>
  )
}

export default HomeLy