import React from 'react'
import {Button} from 'react-bootstrap'

const Browser = (props) => {
  return (
    <div>
      {props.status==="Terbuka"?
      <span>
      <Button onClick={props.tutup}>Tutup Browser</Button><br/><br/>
      <Button onClick={props.wa}>Buka Whatsapp</Button>
      </span>
      :
      <Button onClick={props.buka}>Buka Browser</Button>
      }
    </div>
  )
}

export default Browser
