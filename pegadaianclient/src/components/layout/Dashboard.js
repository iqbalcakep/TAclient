import React, { Component } from 'react'
import {Parallax} from 'react-materialize'
import Content from '../Dashboard/content'
import {withRouter} from 'react-router-dom'
export class Dashboard extends Component {
  render() {
    return (
      <div className="page">
      <Parallax imageSrc="https://www.pegadaian.co.id/assets/frontend/img/header/cover-cabang.jpg"/>
      <Content/>
      </div>
    )
  }
}

export default withRouter(Dashboard)
