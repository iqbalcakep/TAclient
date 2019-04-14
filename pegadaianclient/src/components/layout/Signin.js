import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from '../../store/actions/authAction'
import {ProgressBar} from 'react-materialize'
import {Redirect,withRouter} from 'react-router-dom'


export class Signin extends Component {
    state={
        username : '',
        passowrd : ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            await this.props.login(this.state);
          } catch (e) {
            alert(e.message);
          }
    }
  render() {
      
     const {loading,error} = this.props
     if (this.props.isAuthenticated.isAuthenticated) {
        
        return <Redirect to="/" />
    }
    
    return (
      <div style={{"marginTop":"10%"}} className="container page">
      {
            loading ? 
            <ProgressBar />
            : ""
        }
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink-lighten-1">Login</button>
            </div>
        </form>
            <br/>
         {   
            error ?
            <h3 style={{color:"red"}}>Pastikan Anda Telah Login Dengan Benar</h3>
            :""
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        sukses: state.auth.data,
        isAuthenticated : state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (cred) => dispatch(login(cred))
    };
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Signin))