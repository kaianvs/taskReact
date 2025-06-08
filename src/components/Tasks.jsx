import { ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

function Tasks(props)//Pode fazer destructuring das props
{

    const navigate = useNavigate()

    function onSeeDetailsClick(task){
        navigate(`/task?title=${task.title}&description=${task.description}`)
    }


    return <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2" >
                <button onClick={()=> props.onTaskClick(task.id)} 
                    className = {`w-full bg-purple-950 text-white p-2 rounded-md 
                    text-left ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                    </button>
                <Button onClick={()=> onSeeDetailsClick(task) } >
                    <ChevronRightIcon/>
                </Button>
                 <button onClick={()=> props.deleteTaskClick(task.id)} className="bg-purple-950 p-2 rounded-md text-white">
                    <TrashIcon/>
                </button>
            </li>
        ))}</ul>
}

export default  Tasks