import React from 'react';

function Marker(props) {
    const { color, name} = props;
    console.log("MARKER");
    console.log(props.lat)
    return (
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />
      </div>
    );
  };

  export default Marker;