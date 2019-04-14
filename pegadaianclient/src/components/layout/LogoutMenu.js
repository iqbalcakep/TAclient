import React from 'react'
import {NavLink,withRouter} from 'react-router-dom'

const LogoutMenu = () => {
  return (
    <div>
    <ul className="right">
        <li><NavLink to="/signin">Login</NavLink></li>
        </ul>
    </div>
  )
}

export default withRouter(LogoutMenu)
