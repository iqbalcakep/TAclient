import React from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import Page from '../pemasaran/Page';

const LoadHalaman = (props) => {
  return (
    <div>
      {props.pcekurl!==null?
      <Page></Page>
      :
      <Row>
      <Col sm="8">
      <img src={props.waurl} alt=""/>
      </Col>
      <Col sm="4">
      <h3>Apabila Barcode Error Silahkan Refresh Browser</h3>
      <h4>Pastikan Cek Ketika Scan Barcode Selesai.</h4>
      <Button onClick={props.cekurl}>Cek</Button>
      </Col>
    </Row>
      }

    </div>
  )
}

export default LoadHalaman
