import React from 'react';
import Cards from './Cards';
import Googlemap from './Googlemap';


function Dashboard() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <Googlemap />
        </div>
        <div class="col-4">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
