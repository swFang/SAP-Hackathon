import React, { useState }from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import './css/Marker.css';
// API KEY: AIzaSyBiNLSs56-UkgDJDNu19wq_keRWBUIzkk4
// lat long: 49.24,
// zoom: 11.7


function Googlemap(props) {

  const [center, setCenter] = useState({lat: 49.24, lng: -123});
  const [zoom, setZoom] = useState(11.7);
  return (
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBiNLSs56-UkgDJDNu19wq_keRWBUIzkk4' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      {props.data.map(task => (
        <Marker
          key={task._id}
          lat={task.location.lat}
          lng={task.location.long}
          name={task.name}
        />
      ))}
      </GoogleMapReact>
    </div>
  );
}

export default Googlemap;