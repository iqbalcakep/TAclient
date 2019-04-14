import React, { Component } from 'react'
import Browser from '../pemasaran/Browser'
import {Row,Col}  from 'react-bootstrap'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { bukaBrowser, tutupBrowser, buakwa, cekurl } from '../../store/actions/pemasaranAction';
import Preloader from 'react-materialize/lib/Preloader';
import LoadHalaman from '../pemasaran/LoadHalaman';


class Pemasaran extends Component {

  bukaBrowser=()=>{
    this.props.bukaBrowser();
  }

  tutupBrowser=()=>{
    this.props.tutupBrowser();
  }

  bukaWa=()=>{
    this.props.bukawa();
  }
  cekurl=()=>{
    this.props.cekurl();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.statusBrowser!==this.props.statusBrowser){
        this.props = nextProps
    }
    if(nextProps.waurl!==this.props.waurl){
      this.props = nextProps
    }
    if(nextProps.pcekurl!==this.props.pcekurl){
      this.props = nextProps
    }
}

  render() {
    return (
      <div className="page">
      <Row>
          <Col sm={3} style={{height:"650px",paddingTop:"300px",paddingLeft:"200px"}}>
        <Browser tutup={this.tutupBrowser} wa={this.bukaWa} buka={this.bukaBrowser} status={this.props.statusBrowser}></Browser><br/>
           </Col>
           <Col sm={9} style={{paddingTop:"100px"}}>
            {
              this.props.isLoading ?
              <span style={{padding:"300px"}}><Preloader/></span>
              :
              <span>{
              this.props.waurl!==null ?
              <span>
              <LoadHalaman cekurl={this.cekurl} pcekurl={this.props.pcekurl} waurl={this.props.waurl}></LoadHalaman>
              </span>
              :
              <h1>Halaman Browser</h1>
              }
              </span>
            }
           </Col>
           </Row>
      </div>
    )
  }
}

const mapDispatchtoProps=(dispatch)=>{
  return{
    bukaBrowser : ()=>{dispatch(bukaBrowser())},
    tutupBrowser : ()=>{dispatch(tutupBrowser())},
    bukawa : ()=>{dispatch(buakwa())},
    cekurl : ()=>{dispatch(cekurl())}

  }
}

const mapstateToProps=(state)=>{
  return{
    statusBrowser : state.pemasaran.browserStatus,
    waurl : state.pemasaran.waurl,
    pcekurl : state.pemasaran.cekurl,
    isLoading : state.pemasaran.loading
  }
}

export default withRouter(connect(mapstateToProps,mapDispatchtoProps)(Pemasaran))
