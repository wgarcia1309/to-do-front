import Task from "../Task"
export default function Column({title,testTasks,standar}){

    const listItems=testTasks.map(({taskName,id,status})=>{
        return status===standar? <Task key={id} name={taskName}/> :""
    });
        
    return(
        <div>
            <h3>{title}</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}