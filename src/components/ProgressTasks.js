import React, { useState } from 'react';
import ProgressTask from './ProgressTask';


function CompletedCards(props) {

  // function deleteCard(title_) {
  //   console.log(title_);
  //   const arr = data.filter(task => task.title !== title_)
  //   setData(arr)
  // }
  
  return (
    <div>
      {props.data.map(task => (
        <ProgressTask
          key={task.id}
          title={task.name}
          date={task.date}
          lat={task.lat}
          lon={task.lon}
          name={task.name}
          id={task.id}
          complete={true}
          description={task.description}
          deleteTask={props.deleteTask}
        />
      ))}
    </div>
  );
}

export default CompletedCards;
