import React from 'react'
import { ProgressBar } from 'react-materialize';
import Button from 'react-materialize/lib/Button';
import {RadioButton,RadioGroup,ReversedRadioButton} from 'react-radio-buttons'

const Data = ({data,getRute,setLocation,filterSkala}) => {
  
    if(data.data !== null){
      var list = Object.keys(data.data).length ?
      data.data.map(d=>{
        return (
        <li key={d.id} className="collection-item z-depth-4">
            <h2>{d.nama}</h2> 
              <p><b>{d.alamat}, {d.kecamatan}, {d.kelurahan}</b></p>
              <p>Kategori : {d.kategori_usaha}</p>
              <a onClick={()=>{getRute(d.nama,d.lat,d.long)}} className="secondary-content"><i className="material-icons">place</i> Show Location</a>
              <p>Skala : {d.skala_usaha}</p>
              <p>Jarak : {d.jarak} Km</p>
              <p>No HP : {d.nohp}</p>
        </li>
        )
      })
      :
        <span>
       <center><h4>Data Tidak Di Temukan</h4></center>
       <RadioGroup onChange={ filterSkala }  horizontal>
            <RadioButton value="semua">
              Semua
            </RadioButton>
            <RadioButton value="kecil">
              kecil
            </RadioButton>
            <RadioButton value="menengah">
              Menengah
            </RadioButton>
            <RadioButton value="mikro">
              Mikro
            </RadioButton>
            <RadioButton value="besar">
              Besar
            </RadioButton>
          </RadioGroup>
       </span>
    }

  return (
    <div>
    {data.loading ?
     <ProgressBar/>
    :""}
    {data.data !== null ?
     <div>
     {Object.keys(data.data).length ?
      <span>
        <Button>Kirim Broadcast</Button> 
        <Button onClick={setLocation}>Tampil Semua Lokasi</Button><br/><br/><br/>
        <RadioGroup onChange={ filterSkala }  horizontal>
            <RadioButton value="semua">
              Semua
            </RadioButton>
            <RadioButton value="kecil">
              kecil
            </RadioButton>
            <RadioButton value="menengah">
              Menengah
            </RadioButton>
            <RadioButton value="mikro">
              Mikro
            </RadioButton>
            <RadioButton value="besar">
              Besar
            </RadioButton>
            
          </RadioGroup>
      </span>
      :""}
        <ul className="collection">
          {list}
        </ul>
     </div>  
      : "" }
      
   
    </div>

  )
}

export default Data
