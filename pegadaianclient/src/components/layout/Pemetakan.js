import React, { Component } from 'react'
import Filter from '../Pemetakan/Filter'
import jwt from 'jsonwebtoken'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {filterAction,filterDetail} from '../../store/actions/filterAction'
import {Row,Col} from 'react-bootstrap'
import Data from '../Pemetakan/Data'
import GoogleApiWrapper from '../Pemetakan/MapContainer'


var decrypt ;

class Pemetakan extends Component {


state={
  marker : {
    nama : "",
    lat : "",
    lng : ""
  },
  markers:[],
  hasil:{},
  jarak:""
}
componentDidMount(){
  decrypt = jwt.decode(localStorage.jwtToken)
}

setFilter= (isi)=>{
  this.props.filterDetail(isi,decrypt.Pegadaian.alamat,this.state.jarak)
}

hadleFilter=(jarak)=>{
  this.setState({
    jarak:jarak
  })
  this.props.filter(jarak,decrypt.Pegadaian.alamat);
}
  
  getRute = (nama,lat,long) =>{
    this.setState({
      marker:{
        nama : nama,
        lat: lat,
        lng : long
      },
      markers:[]
    })

  }

  setLocation =()=>{
    this.setState({
      markers:this.props.data.data
    })
  }


  render() {
    return (
      <div className="page">
      <Row >
          <Col sm={12}>
          <div style={{marginTop:"30px"}} className="container">
          <Filter filter={this.hadleFilter}/>
          </div>
          </Col>
       </Row>
       <hr/>
       <Row>
          <Col sm={4} style={{height:"650px",overflow:"auto"}}>
            <div style={{margin:"20px"}}>
              <Data getRute={this.getRute} filterSkala={this.setFilter} setLocation={this.setLocation} data={this.props.data} />
            </div>
          </Col>
          <Col sm={8}><GoogleApiWrapper markers={this.state.markers} marker={this.state.marker} /></Col>
      </Row>
       </div>

    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      filter : (jarak,alamat) => dispatch(filterAction(jarak,alamat)),
      filterDetail : (isi,data,jarak) => dispatch(filterDetail(isi,data,jarak))
  }
}

const mapStateToProps = (state) =>{
  return{
      data : state.filter
  }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Pemetakan))
