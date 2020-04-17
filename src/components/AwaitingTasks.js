import React, { useState } from 'react';
import AwaitingTask from './AwaitingTask';


function AwaitingTasks(props) {
  
  return (
    <div>
      {props.data.map(task => (
        <AwaitingTask
          key={task._id}
          title={task.name}
          date={task.date}
          lat={task.lat}
          lon={task.lon}
          name={task.name}
          onUpdate={props.updateTask}
          id={task.id}
          description={task.description}
          complete={task.complete}
        />
      ))}
    </div>
  );
}

export default AwaitingTasks;
