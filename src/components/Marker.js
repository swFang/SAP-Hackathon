import React from 'react';

function Marker(props) {
    const { color, name} = props;

    return (
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
          lat={49.243}
          lng={-123.002}
        />
        <div className="pulse" />
      </div>
    );
  };

  export default Marker;