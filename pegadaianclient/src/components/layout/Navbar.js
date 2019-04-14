import React from 'react'
import LoginMenu from './LoginMenu'
import LogoutMenu from './LogoutMenu'
import {NavLink,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


const NavbarMenu = (props) => {
  const check = props.isAuthenticated.isAuthenticated ? <LoginMenu/> : <LogoutMenu/>
  return (
    <div className="navbar-fixed">
    <nav className="nav-wrapper grey z-depth-5 darken-3">
        <div className="container">
        <div className="brand-logo active"><NavLink to="/"><span style={{color: "#f57c00"}}>The Gade Malang</span></NavLink></div> 
          {check}
        </div>
    </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(NavbarMenu))
