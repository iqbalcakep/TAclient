import React, { Component } from 'react'
import {connect} from 'react-redux'

export default function(ComposedComponent){
class Admin extends Component {
    componentDidMount(){
        if(this.props.data){
        if(this.props.data.Pegadaian.level !== "admin"){
            this.props.history.push("/")
        }else{
            
        }
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
        data : state.auth.data
    }
}
return connect(mapStateToProps)(Admin)
}


