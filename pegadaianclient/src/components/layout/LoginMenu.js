import React from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutaction} from '../../store/actions/authAction'

const LoginMenu = (props) => {
    const logout =(e)=>{
    e.preventDefault();
       props.logout()
      props.history.push("/signin")
    }
  return (
    <div>
    <ul className="right">
        <li><NavLink to="/pemetakan">Pemetakan</NavLink></li>
        <li><NavLink to="/pemasaran">Pemasaran</NavLink></li>
        <li><NavLink to="/data">Data</NavLink></li>
        <li><NavLink onClick={logout} to="/logout">Log Out</NavLink></li>
        </ul>
    </div>
  )
}

const mapDispatchtoState = (dispatch) => {
    return{
    logout : ()=>{dispatch(logoutaction())}
    }
}

export default withRouter(connect(null,mapDispatchtoState)(LoginMenu))
