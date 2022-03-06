import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarMenu from './components/Navbar';

import TaskDetails from './components/TaskDetails';
import ShowTasks from './components/ShowTasks';
import AddTask from './components/AddTask';
function App() {
  return (
    <div className="App">
      <h1>Django React App</h1>
      
        <div>
          <Router>
          <NavbarMenu />
            <Routes>
              <Route path="/" element={<ShowTasks/>} />
              <Route path="details/:id" element={<TaskDetails/>} /> 
              <Route path="/addTask" element={<AddTask/>} />              
            </Routes>
          </Router>
        </div>
    </div>
  );
}

export default App;