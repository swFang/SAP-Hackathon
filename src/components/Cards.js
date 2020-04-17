import React from 'react';
import Card from './card';


function Cards() {


  /* Need to talk to express API server and retrieve tasks info
  
  Title
  Date
  Description
  Name of person
  priority (?)
  
  */
  function createCards() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(<Card key={i} />);
    }
    return arr;
  }
  
  return (
    <div>
      {createCards()}
    </div>
  );
}

export default Cards;
