import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import './index.css'
import {  useEffect, useState } from "react"
import {v4} from 'uuid'
import Title from "./components/Title"


function App(){
  // State (ESTADO) de um componente
  // Hook
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] );

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

// useEffect(()=>{
//   //   async function fetchTasks(){
//   //   const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
//   //   const data = await response.json()

//   //   setTasks(data)
//   //  }
//    //OPÇÃO CHAMAR DADOS FICTICIOS DE UMA API
//    //fetchTasks();
  
//   }, [])
  
  function onTaskClick(taskId){
      const newTasks = tasks.map(task =>{
        if(task.id === taskId){
          return{...task, isCompleted: !task.isCompleted}
        }

        return task
      })

      setTasks(newTasks);
  }
   function deleteTaskClick(taskId){
      const newTasks = tasks.filter(task => task.id !== taskId);

      setTasks(newTasks);
  }

  function onAddTask(title, description){
            const newTask = {
              id: v4(),
              title: title,
              description: description,
              isCompleted: false
            }
            setTasks([...tasks, newTask])
  }

  return(
    <div className="w-screen h-screen bg-violet-950 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
          <Title>GERENCIADOR DE TAREFAS</Title>
          <AddTask onAddTask = {onAddTask}/>
          <Tasks tasks={tasks} onTaskClick = {onTaskClick} deleteTaskClick = {deleteTaskClick}/>
      </div>
    </div>
  )
}

export default App
