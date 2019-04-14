import React, { Component } from 'react';
import NavbarMenu from './components/layout/Navbar'
import MyRoute from './components/layout/MyRoute'
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
  render() {
    
    return (
        <div className="App">
        <BrowserRouter>
          <NavbarMenu/>
          <MyRoute  {...this.props}/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
