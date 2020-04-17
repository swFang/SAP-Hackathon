import React, { useState, useEffect } from 'react';
import Googlemap from './Googlemap';
import AwaitingTasks from './AwaitingTasks';
import ProgressTasks from './ProgressTasks';
import axios from 'axios';


function Dashboard() {
  const [data, setData] = useState({});
  const awaitingTasks_ = 
    // { 
    //   "title": "Dummy Title1",
    //   "date": "April 4th, 2020",
    //   "lat": "49.24",
    //   "lon": -"123",
    //   "name": "John",
    //   "complete": false
    // },
    // { 
    //   "title": "Dummy Title2",
    //   "date": "April 5th, 2020",
    //   "lat": "49.25",
    //   "lon": -"123.01",
    //   "name": "John",
    //   "complete": false
    // },
    // { 
    //   "title": "Dummy Title3",
    //   "date": "April 6th, 2020",
    //   "lat": "49.26",
    //   "lon": -"123.02",
    //   "name": "John",
    //   "complete": false
    // }
      {
        "stuff": {
            "_id": "5e9941c34bc5b70063f592e0",
            "priority": 10,
            "name": "make_PPE",
            "associatedPosts": [
                null,
                {
                    "location": {
                        "lat": 49.241,
                        "long": -123
                    },
                    "_id": "5e99539ca51bc701ecac8fa0",
                    "priority": 10,
                    "name": "newPosting",
                    "description": "description",
                    "poster": "poster",
                    "contact": "new",
                    "date": "2020-04-17T06:39:25.000Z",
                    "completion": true,
                    "__v": 0
                },
                {
                    "location": {
                      "lat": 49.242,
                      "long": -123.02
                    },
                    "_id": "5e99e7499f498c076c388daf",
                    "priority": 10,
                    "name": "ASD",
                    "description": "asd",
                    "poster": "dummy name",
                    "contact": "asdf",
                    "date": "2020-04-17T17:09:08.000Z",
                    "completion": false,
                    "__v": 0
                },
                {
                    "location": {
                      "lat": 49.243,
                      "long": -123.04
                    },
                    "_id": "5e99e7639f498c076c388db1",
                    "priority": 10,
                    "name": "ASD",
                    "description": "asd",
                    "poster": "dummy name",
                    "contact": "asdf",
                    "date": "2020-04-17T17:09:08.000Z",
                    "completion": false,
                    "__v": 0
                },
                {
                    "location": {
                      "lat": 49.244,
                      "long": -123.06
                    },
                    "_id": "5e99e87aa753a907fc60320f",
                    "priority": 10,
                    "name": "Need Faceshields",
                    "description": "Need faceshields to help protect doctors\n",
                    "poster": "dummy name",
                    "contact": "604-xxx-xxxx",
                    "date": "2020-04-17T17:09:08.000Z",
                    "completion": false,
                    "__v": 0
                }
            ],
            "__v": 5
        }
    }
  

  const progressTasks_ = {
    "stuff": {
        "_id": "5e9941c34bc5b70063f592e1",
        "priority": 10,
        "name": "make_PPE",
        "associatedPosts": [
            null,
            {
                "location": {
                    "lat": 1,
                    "long": 2
                },
                "_id": "5e99539ca51bc701ecac8fa1",
                "priority": 10,
                "name": "newPosting",
                "description": "description",
                "poster": "poster",
                "contact": "new",
                "date": "2020-04-17T06:39:25.000Z",
                "completion": true,
                "__v": 0
            },
            {
                "location": {
                    "lat": 1,
                    "long": 1
                },
                "_id": "5e99e7499f498c076c388dad",
                "priority": 10,
                "name": "ASD",
                "description": "asd",
                "poster": "dummy name",
                "contact": "asdf",
                "date": "2020-04-17T17:09:08.000Z",
                "completion": false,
                "__v": 0
            },
            {
                "location": {
                    "lat": 1,
                    "long": 1
                },
                "_id": "5e99e7639f498c076c388db2",
                "priority": 10,
                "name": "ASD",
                "description": "asd",
                "poster": "dummy name",
                "contact": "asdf",
                "date": "2020-04-17T17:09:08.000Z",
                "completion": false,
                "__v": 0
            },
            {
                "location": {
                    "lat": 1,
                    "long": 1
                },
                "_id": "5e99e87aa753a907fc60320v",
                "priority": 10,
                "name": "Need Faceshields",
                "description": "Need faceshields to help protect doctors\n",
                "poster": "dummy name",
                "contact": "604-xxx-xxxx",
                "date": "2020-04-17T17:09:08.000Z",
                "completion": false,
                "__v": 0
            }
        ],
        "__v": 5
    }
}


  function upDateJson(arr) {
    let result = [];
    for (let i = 1; i < arr.stuff.associatedPosts.length; i++) {
      const obj = arr.stuff.associatedPosts[i]
      result.push(obj)
    }
    // console.log("result[0]");
    // console.log(result[0]);
    return result;
  }

  const awaitingTasks_updated = upDateJson(awaitingTasks_)
  const progressTasks_updated = upDateJson(progressTasks_)


  useEffect(() => {
    axios.get("http://localhost:8080/postsOfTags?tag=make_PPE")
      .then(res => {
        console.log("res.data.stuff");

        console.log(res.data.stuff.associatedPosts);
        setAwaitingTasks(res.data.stuff.associatedPosts);
      })
  }, []);

  // useEffect(async () => {
  //   axios.get('http://localhost:8080/postsOfTags?tag=make_PPE')
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log(response.status);
  //       console.log(response.statusText);
  //       console.log(response.headers);
  //       console.log(response.config);
  //     }).catch((err) =>
  //       console.log(err));
  // }, []);

  const [awaitingTasks, setAwaitingTasks] = useState([]);
  const [progressTasks, setProgressTasks] = useState([]);

  function updateTask(title_) {
    // console.log("title: " + title_)
    // console.log("Dashboard update");
    const t = awaitingTasks.find(task => task.name === title_);

    const new_awaitingTasks = awaitingTasks.filter(task => task.name !== title_);

    setAwaitingTasks(new_awaitingTasks);
    setProgressTasks(progressTasks.concat(t));

    // console.log("new_awaitingTasks: " + new_awaitingTasks);
    // console.log("progressTasks: " + progressTasks);
    // console.log("data: " + data);
  }

  function deleteTask(title_) {
    console.log("title_ :" + title_)
    const new_progressTasks = progressTasks.filter(task => task.name !== title_);
    setProgressTasks(new_progressTasks);
  }

  console.log("awaitingTasks_updated");
  console.log(awaitingTasks_updated);
  console.log("progressTasks_updated");
  console.log(progressTasks_updated);


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
