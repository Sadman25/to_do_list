import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function ShowTasks() {
  
  const [tasks, setTasks] = useState([]);
  const getTasks = async() => {
    const response = await axios.get('http://127.0.0.1:8000/api/')
    setTasks(response.data)
    
  }

  useEffect(()=>{
    getTasks();
  },[])
  return (
    <div className='container'>
      <h1 style={{textAlign: "center",}}>All Tasks</h1>
      {
        tasks.map((task)=>(          
          
          <React.Fragment key={task.id}>
            <div className='row'>
              <div className="col-10">
                <p className = "form-control bg-white btn mt-3"
                style={{textAlign: "left", fontWeight: "bold"}}>
                    {task.task}
                </p>
              </div>

              <div className="col-2">
                <Link className="btn btn-primary" to={`details/${task.id}`}>Detail</Link>
              </div>
            </div>
            
          </React.Fragment>
                
          

        ))
      }
      
    </div>
  )
}
