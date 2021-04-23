import {Link } from 'react-router-dom'
export default function NoMatch(){
    return (  
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500  ">
    <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow overflow-hidden rounded-lg pb-8">
        <div className="border-t border-gray-200 text-center pt-8">
          <h1 className="text-9xl font-bold text-blue-400">404</h1>
          <h1 className="text-6xl font-medium py-8">oops! Pagina no encotrada</h1>
          <p className="text-2xl pb-8 px-12 font-medium">La pagina que buscas no existe. Pudo haber sido borrada o eliminada.</p>
          <Link to="/" className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
            Inicio
          </Link>
        </div>
      </div>
    </div>
  </div>)
}