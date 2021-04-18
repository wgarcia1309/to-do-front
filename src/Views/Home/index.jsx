import { useState } from "react"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SingUp";

export default function Home(){
    const [isSingUp,setIsSingUp] =useState(false)
    const handleHomeChange= ()=>{
        setIsSingUp(!isSingUp);
    }
    return  isSingUp?(
        <SignUp handleHomeChange={handleHomeChange}/>
    ):(
        <SignIn handleHomeChange={handleHomeChange}/>
    );
    
}