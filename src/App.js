import './App.css';
import { useState } from 'react';
import Form from './form/Form';
import ListTask from './listTask/ListTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const onCreateTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="App">
      <Form createTask={onCreateTask}/>
      <ListTask tasks={tasks}/>
    </div>
  );
} 

export default App;
