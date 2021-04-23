import { useState } from "react"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SingUp";
import "./index.css"
export default function Home(){
    const [isSingUp,setIsSingUp] =useState(false)
    const handleHomeChange= ()=>{
        setIsSingUp(!isSingUp);
    }
    return    (
    <div class="bg-gradient-to-br from-blue-400 to-indigo-500 landing">
            
        {isSingUp?(
            <SignUp handleHomeChange={handleHomeChange}/>
        ):(
            <SignIn handleHomeChange={handleHomeChange}/>
        )}
    </div>
    ) 
}