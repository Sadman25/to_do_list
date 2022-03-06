import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
export default function TaskDetails() {

        const [task, setTask] = useState([])
        const navigate = useNavigate();
        const {id} = useParams();
        
        
        useEffect(() => {
            getSingleTask();
            
        },[id])
        
        
        const getSingleTask = async () => {
          const  { data } = await axios.get(`http://127.0.0.1:8000/api/details/${id}/`)
          console.log(data);
          setTask(data);         
        
        }

        const editTask= async(task)=>{
          let taskEdit = prompt("Please edit your task", `${task.task}`);
          setTask(taskEdit)
          console.log(taskEdit)
          
          
          await axios.put(`http://127.0.0.1:8000/api/details/${task.id}/`,{
            id:task.id,
            task:taskEdit
          }).then(document.location.reload())
          
        }
        
        const handleDelete = async (task) => {
            
            await axios.delete(`http://127.0.0.1:8000/api/details/${task.id}/`)
            navigate('/')
        }
  return (
    <div className='container'>
        <div className='row'>
            <div className="col-md-9">
            <h1>Task Number {task.id}</h1>
            <p>{task.task}</p>              
            </div>
            <div className='col-md-3'>
              <button 
              className='mt-3 btn btn-warning'
              onClick={()=> editTask(task)}>
              Edit task
              </button>
              <button className='mt-3 btn btn-danger'
              onClick={()=> handleDelete(task)}
              >
              Delete task
              </button>

            </div>
        </div>
              
        
    </div>
    
  )}

