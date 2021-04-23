import { useState } from "react";

export default function Config(){
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
    <div className="bg-gradient-to-br from-blue-400 to-indigo-500 landing">
    <div className="flex flex-col justify-center  sm:w-96 sm:m-auto mx-5  
     space-y-8 min-h-screen ">
    <form action="" className="m-10 bg-white rounded p-10 shadow-lg">
        <div className=" flex mb-4 justify-center">
          <svg className="fill-current text-blue-500  w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/>
            </svg>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
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
          <label className="block text-gray-700 text-sm font-bold mb-2" >
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
          <label className="block text-gray-700 text-sm font-bold mb-2" >
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
        <label className="block text-gray-700 text-sm font-bold mb-2" >
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
          Actualizar datos
          </button>
        </div>
        
    </form>
    </div>
    </div>
);
}
