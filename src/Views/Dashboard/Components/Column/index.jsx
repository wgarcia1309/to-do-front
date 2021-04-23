import Task from "../Task"
export default function Column({title,testTasks,standar}){

    const listItems=testTasks.map(({taskName,id,status})=>{
        return status===standar? <Task key={id} name={taskName}/> :""
    });
    const COLOR=["black","red","yellow","green"]
    return(
        <div className={` rounded border-2 border-dotted border-${COLOR[standar]}-400 p-4`} >
            <h3 className="text-center pb-4">{title}</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}