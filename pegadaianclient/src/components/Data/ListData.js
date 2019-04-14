import React from 'react'
import {Table} from 'react-bootstrap'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import '../../css/slider.css'

const ListData = (props) => {
    
    let nomor = 1;
   if(!props.data){
     return <p>Data Tidak ada</p>
   }

  return (
   <div>
    <h3>Data Pengusaha</h3>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>No</th>
      <th>Usaha</th>
      <th>Kategori</th>
      <th>Skala</th>
      <th>Aksi</th>
    </tr>
        </thead>
        <TransitionGroup component="tbody">
            {props.data.map(r=>{
          return(
           <CSSTransition key={r._id} timeout={300} classNames="move">
            <tr key={r._id}><td>{nomor++}</td><td>{r.nama}</td><td>{r.kategori_usaha}</td><td>{r.skala_usaha}</td><td><button onClick={()=>props.hapus(r._id)}>Hapus</button></td></tr>
            </CSSTransition>)
          })}
       </TransitionGroup>
        </Table>
    </div>
  )
}

export default ListData
