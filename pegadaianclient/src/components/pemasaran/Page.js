import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ProgressBar} from 'react-materialize'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { kirim } from '../../store/actions/kirimAction';

class Page extends Component {
  state={
    nama :null,
    pesan:null,
    loading:false,
    error:false,
    status:[],
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value,
    })
  }

kirimPesanWa = (num) => {
    return new Promise((resolve, reject) => {
      axios.get(`http://127.0.0.1:8090/api/robot/kirim/${num}/${this.state.pesan}`)
      .then(response => {
        return resolve(response.data)
      })
      .catch(error => {
        return reject(error.message)
      })
    })
  }

  handleSubmit=async (e)=>{
    e.preventDefault();
   let list = this.state.nama.split(/,/g);
    for(let nama of list){
      await this.kirimPesanWa(nama).then((data) => {
            this.setState({
              status:[...this.state.status,data]
            })
      }).catch(error=>{
        if(error==="Request failed with status code 404"){
          var info = "Kontak Kosong";
        }
        this.setState({
          status:[...this.state.status,info]
        })
      })
    }
  
  }
  render() {
    return (
      <span>
      <div style={{display: 'flex'}}>
      <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">BroadCast WhatsApp</h5>
            <div className="input-field">
                <label htmlFor="username">Penerima</label>
                <input type="text" id="nama" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Pesan</label>
                <textarea name="pesan" id="pesan" cols="30" onChange={this.handleChange} rows="10"></textarea>
            </div>
            <div className="input-field">
                <button className="btn pink-lighten-1">Kirim</button>
            </div>
        </form>
      </div>
      <br/><br/>
        {
          this.state.status!==null?
          <textarea style={{width:"400px",height:"400px"}} readOnly={true} value={
          this.state.status.map(hasil=>{
           return hasil+"\n";
            })
          }></textarea>
          :
          <h3>Status</h3>
        }
      </span>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{

  }
}

const mapStateToProps=(state)=>{
  return{
  kirimStatus : state.kirim.kirimStatus
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Page))
