import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const Content = (props) => {
  if(!props.data){
    return ("")
  }
 const data = props.data.Pegadaian
   
  return (
    <div className="row">
    <div className="container konten">
        <h1>Haii {data.cabang}</h1>
        <p>Alamat {data.alamat}</p>
        </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
      data : state.auth.data
    }
}


export default withRouter(connect(mapStateToProps)(Content))
