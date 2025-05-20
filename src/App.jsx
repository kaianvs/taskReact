import Tasks from "./components/Tasks"
import './index.css'


function App(){
  // State (ESTADO) de um componente
  // Hook
  
  return(
    <div>
      <h1 className="text-red-500">Gerenciador de tarefas</h1>
      <Tasks/>
    </div>
  )
}

export default App
