import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import './index.css'
import {  useState } from "react"


function App(){
  // State (ESTADO) de um componente
  // Hook
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack",
    isCompleted: false
  },
  {
     id: 2,
     title: "Ir pra academia",
      description: "Fazer exercicios fisicos e se tornar mais saudavel",
     isCompleted: false
  },
  {
     id: 3,
     title: "Estudar react",
      description: "Estudar para conseguir um estágio como desenvolvedor",
     isCompleted: true
  }])
  
  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
          <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
          <Tasks tasks={tasks}/>
          <AddTask/>
      </div>
    </div>
  )
}

export default App
