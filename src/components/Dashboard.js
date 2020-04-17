import React, { useState } from 'react';
import Googlemap from './Googlemap';
import AwaitingTasks from './AwaitingTasks';
import ProgressTasks from './ProgressTasks';
import { isCompositeComponent } from 'react-dom/test-utils';


function Dashboard() {
  const awaitingTasks_ = [
    { 
      "title": "Dummy Title1",
      "date": "April 4th, 2020",
      "lat": "49.24",
      "lon": -"123",
      "name": "John",
      "complete": false
    },
    { 
      "title": "Dummy Title2",
      "date": "April 5th, 2020",
      "lat": "49.25",
      "lon": -"123.01",
      "name": "John",
      "complete": false
    },
    { 
      "title": "Dummy Title3",
      "date": "April 6th, 2020",
      "lat": "49.26",
      "lon": -"123.02",
      "name": "John",
      "complete": false
    }
  ]

  const progressTasks_ = [
    { 
      "title": "Completed task title",
      "date": "April 5th, 2020",
      "lat": "49.27",
      "lon": -"123.03",
      "name": "John",
      "complete": true
    }
  ]

  const [awaitingTasks, setAwaitingTasks] = useState(awaitingTasks_);
  const [progressTasks, setProgressTasks] = useState(progressTasks_);

  function updateTask(title_) {
    console.log("title: " + title_)
    console.log("Dashboard update");
    const t = awaitingTasks.find(task => task.title === title_);

    const new_awaitingTasks = awaitingTasks.filter(task => task.title !== title_);

    setAwaitingTasks(new_awaitingTasks);
    setProgressTasks(progressTasks.concat(t));

    console.log("new_awaitingTasks: " + new_awaitingTasks);
    console.log("progressTasks: " + progressTasks);
  }

  function deleteTask(title_) {
    console.log("title_ :" + title_)
    const new_progressTasks = progressTasks.filter(task => task.title !== title_);
    setAwaitingTasks(new_progressTasks);

    console.log("new_progressTasks: " + new_progressTasks);
  }

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <Googlemap data={awaitingTasks}/>
        </div>
        <div class="col-4">
          <h1>Awaiting Requests</h1>
          <AwaitingTasks data={awaitingTasks} updateTask={updateTask}/>
          <h1>In Progress</h1>
          <ProgressTasks data={progressTasks} deleteTask={deleteTask}/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
