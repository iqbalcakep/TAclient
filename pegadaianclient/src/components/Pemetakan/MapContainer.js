import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker} from 'google-maps-react';
import jwt from 'jsonwebtoken'


const mapStyles = {
  width: '90%',
  height: '100%'
};

var image = {
  url: "https://cdn.apk-cloud.com/detail/image/net.igodev.pgapp-w130.png?r2",
  scaledSize: { width: 50, height: 50 } 
};

export class MapContainer extends Component {
  state={
    marker : {
      nama : "",
      lat : "",
      lng : ""
    },
    markers:[],
    init : jwt.decode(localStorage.jwtToken)
  }



  componentWillReceiveProps(nextProps){
    if(this.props.marker!==nextProps.marker){
      this.setState({
        marker : {
          nama : nextProps.marker.nama,
          lat : nextProps.marker.lat,
          lng : nextProps.marker.lng
        }
      })
    }

    if(this.props.markers!==nextProps.markers){
      this.setState({
        markers : nextProps.markers
      })
    }
  }


  render() {
    const {init} = this.state
    var bounds = new this.props.google.maps.LatLngBounds();
    var points = [new this.props.google.maps.LatLng(parseFloat(init.Pegadaian.lat),parseFloat(init.Pegadaian.long))];
    if(Object.keys(this.state.markers).length){
      this.state.markers.map(d=>{
        var lat = parseFloat(d.lat);
        var long = parseFloat(d.long);
        points.push(new this.props.google.maps.LatLng(lat,long))
      })
    }else{
    var latM = parseFloat(this.state.marker.lat);
    var longM = parseFloat(this.state.marker.lng);
    points = [new this.props.google.maps.LatLng(latM,longM),new this.props.google.maps.LatLng(parseFloat(init.Pegadaian.lat),parseFloat(init.Pegadaian.long))]
    }

    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        bounds={bounds}
        initialCenter={{
         lat: init.Pegadaian.lat,
         lng: init.Pegadaian.long
        }}>
        <Marker
         title={init.Pegadaian.cabang}
         name={init.Pegadaian.cabang}
         position={{lat: init.Pegadaian.lat, lng: init.Pegadaian.long}}
         icon={image} />
         {Object.keys(this.state.markers).length ?
         this.state.markers.map(d=>{
           return(
            <Marker key={d.id}
              title={d.nama}
              name={d.nama}
              position={{lat: d.lat, lng: d.long }}
            />
           )
         })
         :
         <Marker
         title={this.state.marker.nama}
         name={this.state.marker.nama}
         position={{lat: this.state.marker.lat, lng: this.state.marker.lng }}
         />
         }
         
      </Map>
      
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDxqY1SiTnm3kL_XvJ91owIJmnTox74BfA'
})(MapContainer);