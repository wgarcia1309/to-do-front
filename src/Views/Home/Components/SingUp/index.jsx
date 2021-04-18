import { useState } from "react";

export default function SignUp({handleHomeChange}){
    const [state, setState] = useState({
        email: "",
        nombre:"",
        password:"",
        confirmPassword:"",
        file:""
      });
    function handleChange({target:{value,name}}) {
        console.log(value,name)
      setState({
        ...state,
        [name]: value
      });
    }
    return (
        <>
        <h1>Registrarse</h1>
        <form action="">
            <input 
              type="email" 
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={handleChange}/>
            <input 
              type="text" 
              placeholder="Nombre"
              name="nombre"
              value={state.nombre}
              onChange={handleChange}/>
            <input 
              type="password" 
              placeholder="contraseña" 
              name="password"
              value={state.password}
              onChange={handleChange}/>
            <input 
              type="password" 
              placeholder="confirmar contraseña" 
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}/>
            <input 
              type="file" 
              placeholder="foto" 
              name="file"
              value={state.file}
              onChange={handleChange}/>
            <button>Registrarse</button>
        </form>
        <p>Quieres Logearte haz click <a onClick={handleHomeChange}>aqui</a></p>
        </>
    );
}