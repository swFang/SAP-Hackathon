import React from 'react';

function Card(props) {
  return (
    <div class="card">
      <div class="row">
        <div class="col-9">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">posted on April 14, 2020</h6>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <a href="#" class="card-link">Card link</a>
            <br />
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        <div class="col-3">
          <a href="#" class="help">Neep help</a>
        </div>
      </div>
    </div>
  )
}

export default Card;