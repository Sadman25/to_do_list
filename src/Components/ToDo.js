import React, { useState, useEffect } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
      if(localStorage.getItem("localTasks")){
          const storedList = JSON.parse(localStorage.getItem("localTasks"));
          setTasks(storedList);
      }
  },[])

  const handleTask=(e)=>{
         setTask(e.target.value)               
     }

  const addTask = (e) => {
    if (task) {
      const newTask = { id: Math.floor(Math.random() * 1000).toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task)=>{
      const deleteTask = tasks.filter((t)=>t.id !== task.id);
      setTasks(deleteTask);
      localStorage.setItem("localTasks", JSON.stringify(deleteTask))
  }

  const handleClear=()=>{
      setTasks([]);
      localStorage.removeItem("localTasks");
  }

  const totalTasks = !tasks.length
    ? " no tasks"
    : tasks.length === 1
    ? " 1 task"
    : tasks.length > 1
    ? ` ${tasks.length} tasks`
    : null

  return (
    <div className="container row">      
      <h1 className="mt-3">You currently have:{totalTasks} </h1>
      <div className="col-8">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Write your task..."
          className="form-control"
          onChange={handleTask}
        />
      </div>
      <div className="col-4">
        <button
          className="btn btn-primary form-control material-icons"
          onClick={addTask}
        >add
        </button>
      </div>      
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
            <div className="col-10">
                <p className = "form-control bg-white btn mt-3"
                style={{textAlign: "left", fontWeight: "bold"}}>
                    {task.title}
                </p>
            </div>

            <div className="col-2">
                <button
                className =" mt-3 btn btn-warning material-icons"
                // onClick ={()=> handleEdit(task)}
                >edit</button>
                <button
                className =" mt-3 btn btn-warning material-icons"
                onClick ={()=> handleDelete(task)}
                >delete</button>
            </div>
        </React.Fragment>
      ))}
      {!tasks.length ? null:(
          <div>
              <button className= "btn btn-secondary  mt-4 mb-4" onClick={()=>handleClear()}>
                  Clear
              </button>
          </div>
      )}
    </div>
  );
}