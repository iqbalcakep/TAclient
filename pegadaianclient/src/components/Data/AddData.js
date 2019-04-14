import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios' 
import {ProgressBar} from 'react-materialize'

class AddData extends Component{
    state = {
        nama :"",
        alamat:"",
        kecamatan:"",
        kelurahan:"",
        lat:"",
        long:"",
        kategori_usaha:"",
        skala_usaha:"",
        nohp:"",
        isLoading:false,
        isError:false,
        selesai:false

    }

    hadlechange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    getKoordinat = (e) =>{
        this.setState({
            isLoading:true
        })
     axios.post("http://127.0.0.1:8090/api/robot/getLongLat",{
          alamat:this.state.alamat,
          kelurahan:this.state.kelurahan,
          kecamatan:this.state.kecamatan
      })
      .then((response) => {
        if (response.status !== 200) {
            throw Error(response.statusText);
        }
            this.setState({
                isLoading:false
            })

        return response;
       })
        .then(response => {
            console.log(response)
            this.setState({
                lat:response.data.lat,
                long:response.data.long,
                selesai:true
            })
        })
        .catch(() => {
            this.setState({
                isLoading:false,
                isError:true,
                selesai:false,
            })
        });

        }

    handlesubmit = (e) => {
        e.preventDefault();
        this.props.tambah(this.state)
        this.setState({
            nama :"",
            alamat:"",
            kecamatan:"",
            kelurahan:"",
            lat:"",
            long:"",
            kategori_usaha:"",
            skala_usaha:"",
            nohp:"",
            isLoading:false,
            isError:false,
            selesai:false
        })
    }


    render(){ 
            if(this.state.isLoading){
                return <ProgressBar/>
            }
            if(this.state.isError){
                return <p>Error</p>

            }
            if(this.state.selesai){
                return(
                     <div id="form">
                    <h3>Tambah Data</h3>
                    <form onSubmit={this.handlesubmit}>
                    
                            <label htmlFor="nama">Usaha</label>
                            <input readOnly onChange={this.hadlechange} value={this.state.nama} type="text" id="nama"/>
                            <label htmlFor="lat">Latitude</label>
                            <input readOnly onChange={this.hadlechange} value={this.state.lat} type="text" id="lat"/>
                            <label htmlFor="long">Longitude</label>
                            <input readOnly  onChange={this.hadlechange} value={this.state.long} type="text" id="long"/>
                            <div className="input-field">
                           <label htmlFor="kategori_usaha">Kategori</label>
                            <input onChange={this.hadlechange} value={this.state.kategori_usaha} type="text" id="kategori_usaha"/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="skala_usaha">Skala</label>
                                <input onChange={this.hadlechange} value={this.state.skala_usaha} type="text" id="skala_usaha"/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="nohp">No Hp (+628XXXXXXXXXX)</label>
                                <input onChange={this.hadlechange} value={this.state.nohp} type="text" id="nohp"/>
                            </div>
                        <Button onClick={this.handlesubmit} className="btn btn-success">Tambah</Button>
                    </form>
                </div>
                )
            }
        return (
            <div id="form">
                <h3>Tambah Data</h3>
                
                    <div className="input-field">
                        <label htmlFor="nama">Usaha</label>
                        <input onChange={this.hadlechange} value={this.state.nama} type="text" id="nama"/>
                   </div>
                   <div className="input-field">
                        <label htmlFor="alamat">Alamat</label>
                        <input onChange={this.hadlechange} value={this.state.alamat} type="text" id="alamat"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="kelurahan">Kelurahan</label>
                        <input onChange={this.hadlechange} value={this.state.kelurahan} type="text" id="kelurahan"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="kecamatan">Kecamatan</label>
                        <input onChange={this.hadlechange} value={this.state.kecamatan} type="text" id="kecamatan"/>
                    </div>
                    <Button onClick={this.getKoordinat} className="btn btn-success">Deteksi Koordinat</Button>
                
            </div>
        )
    }
}

export default AddData;