import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('https://api.todoist.com/rest/v2/tasks', {
        headers: {
          Authorization: 'Bearer token'
        }
      });
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div className='container mt-2'>
      <h1 className='title'>Lista de tareas</h1>
      <div className='grid'> 
      
        {tasks.map(task => (
          <div key={task.id} className='card'> 
          <p> Order: {task.order}</p>
          <p> Nombre: {task.content}</p>
          <p> Descripcion: {task.description}</p>
          <p> Estatus: {task.is_completed}</p>
          <p> Prioridad: {task.priority}</p>
          </div>
        ))}

      </div>
     
    </div>
  );
}

export default App;