import { ChevronRightIcon } from "lucide-react"

function Tasks(props){
    console.log(props)
    return <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2" >
                <button className="w-full bg-slate-400 text-white p-2 rounded-md">{task.title}</button>
                <button className="bg-slate-400 p-2 rounded-md text-white">
                    <ChevronRightIcon/>
                </button>
            </li>
        ))}</ul>
}

export default  Tasks