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
      <div className="flex flex-col justify-center  sm:w-96 sm:m-auto mx-5  
       space-y-8 min-h-screen ">
      <form action="" className="m-10 bg-white rounded p-10 shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input 
              type="email"
              placeholder="Email" 
              id="Email" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={state.email}
              name="email"
              onChange={handleChange}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="nombre">
              Nombre
            </label>
            <input 
              id="nombre"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" 
              placeholder="Nombre"
              name="nombre"
              value={state.nombre}
              onChange={handleChange}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Contraseña
            </label>
            <input 
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="***************"
            value={state.password}
            id="password"
            name="password"
            onChange={handleChange}/>
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password-confirm">
              Confimar contraseña
            </label>
          <input 
            id="password-confirm"
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password" 
            placeholder="***************" 
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}/>
            
          </div>
          <div className="flex flex-col justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mb-2 focus:outline-none focus:shadow-outline" type="button">
            Registrarse
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-center" onClick={handleHomeChange}>
              ¿Quieres iniciar sesion?
            </a>
          </div>
          
      </form>
      </div>
  );
}