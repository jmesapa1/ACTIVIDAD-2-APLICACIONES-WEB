import axios from "axios";
import {Inmueble } from "../types";

export const  getInmuebles = ()=>{
   return axios.get("http://localhost:8080/backend/inmueble")
}

export const postInmueble =(inmueble:Inmueble) =>{
   return axios.post("http://localhost:8080/backend/inmueble/crear",inmueble)
}

export const deleteInmueble =(id:String) =>{
   return axios.delete("http://localhost:8080/backend/inmueble/eliminar/"+id)
}

export const getInmuebleBuscador = (direccion:String)=>{
   return axios.get("http://localhost:8080/backend/inmueble/buscar",{params:{direccion:direccion}})
}