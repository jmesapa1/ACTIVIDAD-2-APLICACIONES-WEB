import { useState, useEffect } from 'react'
import { getInmuebles, deleteInmueble, getInmuebleBuscador, postInmueble } from '../services/inmuebleService'
import { Inmueble as InmuebleType } from "../types";
import { toast } from 'react-toastify';

type UseInmuebleProps = {
   handleClose: () => void,
}

export const UseInmueble = ({ handleClose }: UseInmuebleProps) => {


   const [inmuebles, setInmuebles] = useState([])
   const [inmueblesBuscados, setinmueblesBuscados] = useState([])
   const [buscador, setBuscador] = useState<string>('');

   useEffect(() => { getInmuebles().then(response => setInmuebles(response.data)); }, [])

   function eliminarInmueble(inmueble: InmuebleType) {
      if (inmueble.idInmueble !== undefined && inmueble.idInmueble !== null) {
         deleteInmueble(inmueble.idInmueble.toString()).then(response => {setInmuebles(response.data)
            toast("Se elimino exitosamente") 


         }
      
      )
      }
   }

   function buscarInmueble() {
      getInmuebleBuscador(buscador).then(response => {setinmueblesBuscados(response.data)
         if(response.data.length!=0){
            toast("Se encontraron coincidencia") 
         }

      }).catch(error => console.log(error))
   }

   function limpiarBuscador() {
      setBuscador("")
      setinmueblesBuscados([])
   }

   const crearInmueble = (inmueble: InmuebleType) => {
      postInmueble(inmueble).then(response => {
         setInmuebles(response.data)
         toast("Se creo exitosamente")        
         handleClose()
      }).catch(error => {
         toast("Se genero un error") 
      })
   }
   return {
      inmuebles,
      inmueblesBuscados,
      buscador,
      setBuscador,
      crearInmueble,
      limpiarBuscador,
      buscarInmueble,
      eliminarInmueble,
   }
}