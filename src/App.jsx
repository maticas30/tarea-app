import React, { useState } from "react"   //importamos el react


function App() {
  // const [count, setCount] = useState(0)

  const [tasks, setTasks] = useState([]);  // lista, ir seteando la toma de valor de la var tasks  = maneja los estados
  const [newTask, SetNewTask] = useState('');  // primero NewTask state vacio

  const handleImputChange = (event) => {
    SetNewTask(event.target.value); //toma el valor que tenga el imput
  };

  const handleAddTask = () => {
    if (newTask.trim() !== ''){  //si newTask es distinto a un valor vacio
      setTasks([...tasks, newTask]); //traer todas las tarea y agrgamos newTask
      SetNewTask(''); //borra el imput
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks]; //haceme una copia de todas las tareas y guardalas acá
    updatedTasks.splice(index, 1); //splica ubica el ultimo elemento mediante el index y elimino 1 solo elemento
    setTasks(updatedTasks); //tras tener el elemento eliminado updatedTask va a tener toda la lista menos el ultimo elemnto
  };


  return (
    <div>
      <h1>To do List</h1>
      <input 
      type="text" 
      placeholder="Agarar tarea"   //texto trasparente
      value={newTask}  //valor que toma
      onChange={handleImputChange}  //funcion que esta atento al ingreso de letras
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
      <ul>
        {tasks.map((task, index) => (  //en el mapeo estan los 2 argumentos //en cada list le imprima una key que es index
          //index = 0
          <li key={index}>  
          
            {task} 
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>

        ))}
      </ul>
    </div>
  
  );
}

export default App
