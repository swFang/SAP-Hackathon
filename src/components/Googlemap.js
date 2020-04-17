import React, { useState }from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
// API KEY: AIzaSyBiNLSs56-UkgDJDNu19wq_keRWBUIzkk4
// lat long: 49.24, 
// zoom: 11.7

const AnyReactComponent = ({text} ) => <div>{text}</div>;

function SimpleMap() {
    const [center, setCenter] = useState({lat: 49.24, lng: -123});
    const [zoom, setZoom] = useState(11.7);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBiNLSs56-UkgDJDNu19wq_keRWBUIzkk4' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        <Marker
          lat={49.24}
          lng={-123.1}
          name="My Marker"
          color="red"
        />
        <Marker
          lat={49.241}
          lng={-123.12}
          name="My Marker"
          color="red"
        />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;