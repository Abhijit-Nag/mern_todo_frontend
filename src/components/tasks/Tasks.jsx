import React, { useEffect, useState } from 'react'
import Task from '../task/Task'
import axios, { } from "axios";
import "./tasks.scss";
const Tasks = () => {
  // const data={
  //     title: localStorage.getItem("title"),
  //     desc: localStorage.getItem("desc"),
  //     completed: localStorage.getItem("completed"),

  // }

  const [task, setTask] = useState([]);

  const userEmail = localStorage.getItem("email");
  useEffect(() => {
    const fetchData = async () => {
      const tasks = await axios.get(`http://localhost:5000/auth/tasks/?userEmail=${userEmail}`,);
      console.log(`the tasks are:` + tasks);
      setTask(tasks.data);
    }
    fetchData();
  }, [])
  console.log(userEmail);
  console.log(task)
  return (
    <div className='tasks'>
      {(userEmail && task) && (
        <>

          <h1>All Your Tasks</h1>
          <div className="container">

            {task.map((item) => (

              <Task data={item} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Tasks