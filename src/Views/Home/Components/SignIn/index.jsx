import { useState } from "react";

export default function SignIn({handleHomeChange}){
    const [state, setState] = useState({
        email: "",
        password:""
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
        <h1>Login </h1>
        <form action="">
            <input 
              type="email"
              placeholder="Email" 
              value={state.email}
              name="email"
              onChange={handleChange}/>
            <input 
              type="password"
               placeholder="contraseña"
               value={state.password}
               name="password"
               onChange={handleChange}/>
            <button>Ingresar</button>
        </form>
        <p>Quieres registrarte haz click <a onClick={handleHomeChange}>aqui</a></p>
        <p>Olvidaste tu contraseña?</p>
        </>
    );
}