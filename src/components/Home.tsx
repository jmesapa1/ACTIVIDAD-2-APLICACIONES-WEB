import { useState, useEffect, SetStateAction, useRef } from "react";
import { Inmueble as InmuebleType } from "../types";
import Inmueble from "./Inmueble";
import Formulario from "./Modal";
import { UseInmueble } from "../hooks/UseInmueble";


export default function Home() {

   const [modalCrear, setModalCrear] = useState(false);
   const handleClose = () => {
      setModalCrear(false);
   }
   const {
      inmuebles,
      inmueblesBuscados,
      buscador,
      crearInmueble,
      limpiarBuscador,
      buscarInmueble,
      eliminarInmueble,
      setBuscador
   } = UseInmueble({ handleClose })

   function handleShow() { setModalCrear(true) }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setBuscador(value)
   }



   return (<>
      <Formulario crearInmueble={crearInmueble} modalCrear={modalCrear} handleClose={handleClose} />
      <>
         <h2 className="text-center">Lista de inmuebles                 <button className="btn btn-success my-2 my-sm-0 w-30" type="button" onClick={() => handleShow()} >Crear inmueble</button>
         </h2>
         <div className="input-group mb-3">
            <input type="text" value={buscador} className="form-control" placeholder="Buscar inmueble por coincidencia de direccion" onChange={handleChange} id="buscador" aria-label="buscador" aria-describedby="basic-addon1" />
            <button className="btn btn-primary my-2 my-sm-0 w-30" type="submit" onClick={() => buscarInmueble()}>Buscar</button>
            <button className="btn btn-danger my-2 my-sm-0 w-30" type="button" onClick={() => limpiarBuscador()}>Limpiar</button>
         </div>
         <div className="row mt-5">
            {inmueblesBuscados.length === 0 ?
               inmuebles.map((inmueble: InmuebleType) => (
                  <Inmueble
                     key={inmueble.id}
                     inmueble={inmueble}
                     deleteFunction={eliminarInmueble}
                  />
               )) :
               inmueblesBuscados.map((inmueble: InmuebleType) => (
                  <Inmueble
                     key={inmueble.id}
                     inmueble={inmueble}
                     deleteFunction={eliminarInmueble}
                  />
               ))

            }
         </div>
      </>

   </>)

}