import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddTask() {

const [newTask,setNewTask]= useState("")
const navigate = useNavigate();

const addNewTask = async ()  =>
{  
    await axios({
        method: 'post',
        url:'http://127.0.0.1:8000/api/',
        data: {task:newTask}
      }).then(response=>{
        console.log(response.data);
        navigate('/')
      })
}

  return (
    <div>
        <h3>FORM</h3>
        <div className='container'>
            <div className='form-control'>
                <div className='form-control'>
                    <input
                    type='text'
                    placeholder='Add Task'
                    name='newTask'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    >                        
                    </input>
                </div>
                <button className="btn btn-primary btn-block" onClick={addNewTask}>Add task</button>
            </div>
        </div>
    </div>
  )
}

