import { useNavigate, Form, useActionData } from "react-router-dom"
import Formulario from "../components/Formulario"
import Index from "./Index";
import Error from "../components/Error";

export const  action = async ({request}) => {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData)
    
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('todos los campos son requeridos')
    }
    
    if(Object.keys(errores).length){
        return errores
    }

    
}


const NuevoCliente = () => {

    const navigate = useNavigate()
    const errores = useActionData()

    console.log(errores)

    return(
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">Registra un nuevo cliente</p>

            <div className="flex justify-end">
                <button 
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate(-1)}    
                    >
                    Volver
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

                {errores?.length && errores.map( (error, index) => <Error key={index}>{error}</Error>)}
                <Form
                   method="POST"
                >
                    <Formulario />
                    <input 
                        type="submit" 
                        value="Regsitrar Cliente" 
                        className="mt-5 w-full bg-blue-800 p-3 hover:bg-blue-900 uppercase font-bold text-white text-lg"
                        />
                </Form>
            </div>
        </>
    )
}

export default NuevoCliente