import { useState } from "react";
import Column from "./Components/Column";
import "./styles.css"
export default function Dashboard(){
    const [testTasks,setTestTasks]= useState([
        {id:1,taskName:"test",status:1},
        {id:2,taskName:"test2",status:1},
        {id:3,taskName:"test3",status:2},
        {id:4,taskName:"test4",status:2},
        {id:5,taskName:"test5",status:3},
        {id:6,taskName:"test6",status:3}
    ])
    const [state, setState] = useState({
        id: 0,
        taskName:"",
        status:1
      });

      const handleChange=({target:{value,name}})=>{
          console.log(state)
          isNaN(value)?
            setState({
              ...state,
              [name]: value
            })
            :
            setState({
              ...state,
              [name]: parseInt(value,10)
            });
      }
      const handleAdd=(event)=>{
          event.preventDefault();
          console.log(state)
          console.log(testTasks)
          setTestTasks([...testTasks,state ])
          console.log(testTasks)
      }
    return (
        <>
        <h1>Dashboard</h1>
        <form action="">
            <input type="number" name="id" value={state.id} onChange={handleChange}/>
            <input type="text" name="taskName"  value={state.taskName} onChange={handleChange}/>
            <select value={state.status} name="status" onChange={handleChange}>
            <option value={1}>to do</option>
            <option value={2}>doing</option>
            <option value={3}>done</option>
          </select>
            <button onClick={handleAdd}>enviar</button>
        </form>
        <div className="kanban-container">
            <Column title="TO DO" testTasks={testTasks} standar={1}></Column>
            <Column title="DOING" testTasks={testTasks} standar={2}></Column>
            <Column title="DONE" testTasks={testTasks} standar={3}></Column>
        </div>
        </>
    )
}