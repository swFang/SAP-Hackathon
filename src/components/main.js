import React from 'react';
import Card from './card';

function Main() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <p>Map</p>
        </div>
        <div class="col-4">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Main;
