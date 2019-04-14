import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

export default function(ComposedComponent){
class Authenticate extends Component {
    componentDidMount(){
        if(!this.props.isAuthenticated.isAuthenticated){
            this.props.history.push("/signin")
        }
      
    }

  render() {
    return (
      <ComposedComponent {...this.props}/>
    )
  }
}

const mapStateToProps=state=>{
    return {
        isAuthenticated : state.auth
    }
}
return withRouter(connect(mapStateToProps)(Authenticate))
}


