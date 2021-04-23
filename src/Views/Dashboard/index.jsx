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
    <div className="bg-gradient-to-br from-blue-400 to-indigo-500 landing p-4">
      <div className="mt-4">
        <section className="bg-white rounded p-4">
          <header className="flex items-center justify-between">
            <h2 className="text-lg leading-6 font-medium text-black">Dashboard</h2>
          </header>
          <ul>
            <li className="flex rounded-lg justify-center">
              <form  className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4">
                    <label className="block text-gray-700 text-sm font-bold ml-2" >
                      Titulo
                    </label>
                    <input 
                        className="block text-gray-700 text-sm font-bold m-4"
                        type="text" 
                        name="taskName"
                        placeholder="Titulo" 
                        value={state.taskName} 
                        onChange={handleChange}/>
                    <label className="block text-gray-700 text-sm font-bold p-1" >
                      Estado
                    </label>
                    <select 
                      className="block text-gray-700 text-sm font-bold m-4"
                      value={state.status} 
                      name="status" 
                      onChange={handleChange}>
                      <option value={1}>to do</option>
                      <option value={2}>doing</option>
                      <option value={3}>done</option>
                    </select>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mr-2 focus:outline-none focus:shadow-outline" type="button" onClick={handleAdd}>Nueva tarea</button>
              </form>
            </li>
          </ul>
          <div className="kanban-container pt-4">
            <Column title="TO DO" testTasks={testTasks} standar={1}></Column>
            <Column title="DOING" testTasks={testTasks} standar={2}></Column>
            <Column title="DONE" testTasks={testTasks} standar={3}></Column>
        </div>
        </section>
        
      </div>
        </div>
    )
}


/*
<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
<li x-for="item in items">
  <a :href="item.url" className="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
    <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
      <div>
        <dt className="sr-only">Title</dt>
        <dd className="group-hover:text-white leading-6 font-medium text-black">
          {item.title}
        </dd>
      </div>
      <div>
        <dt className="sr-only">Category</dt>
        <dd className="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
          {item.category}
        </dd>
      </div>
      <div className="col-start-2 row-start-1 row-end-3">
        <dt className="sr-only">Users</dt>
        <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
          <img x-for="user in item.users" :src="user.avatar" :alt="user.name" width="48" height="48" className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white" />
        </dd>
      </div>
    </dl>
  </a>
</li>*/