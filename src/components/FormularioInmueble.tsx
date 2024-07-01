import { Button } from "react-bootstrap";
import { postInmueble } from "../services/inmuebleService";
import { Inmueble } from "../types";
import { useState } from "react";
type FormularioInmuebleProps = {
    crearInmueble: (inmueble: Inmueble, callback:any) => void,
}

export default function FormularioInmueble({ crearInmueble }: FormularioInmuebleProps) {
    const [inmueble, setInmueble] = useState({
        direccion: "",
        departamento: "",
        municipio:"",
        apartamentoFlag: false,
        apartamento: "",
        casaFlag: false,
        casa: "",
        urbanizacionFlag: false,
        urbanizacion: "",
        parqueaderoFlag: false,
        parqueadero: "",
        cuartoUtilFlag: false,
        cuartoUtil: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value, checked } = e.target;
        console.log(name, value, checked)

        if (e.target.type === 'checkbox') {
            setInmueble(prevData => ({ ...prevData, [name]: checked }))
        } else {
            setInmueble(prevData => ({ ...prevData, [name]: value }))
        }
        if (name === "apartamentoFlag" && !checked) setInmueble(prevData => ({ ...prevData, ["numeroApto"]: '' }))
        if (name === "casaFlag" && !checked) setInmueble(prevData => ({ ...prevData, ["numeroCasa"]: '' }))
        if (name === "urbanizacionFlag" && !checked) setInmueble(prevData => ({ ...prevData, ["nombreUrbanziacion"]: '' }))
        if (name === "parqueaderoFlag" && !checked) setInmueble(prevData => ({ ...prevData, ["numeroParqueadero"]: '' }))
        if (name === "cuartoUtilFlag" && !checked) setInmueble(prevData => ({ ...prevData, ["numeroCuarto"]: '' }))
    }

    const limpiarFormulario=(state:boolean)=>{
        if(state){  
            setInmueble({
                direccion: "",
                departamento: "",
                municipio:"",
                apartamentoFlag: false,
                apartamento: "",
                casaFlag: false,
                casa: "",
                urbanizacionFlag: false,
                urbanizacion: "",
                parqueaderoFlag: false,
                parqueadero: "",
                cuartoUtilFlag: false,
                cuartoUtil: ""
            })
        }  
    }

    return (
        <>
            <div>
                <form id="formularioInmueble" className="g-3">
                    <div className="row">
                        <div className="col">
                            <label className="form-label">Dirección</label>
                            <input name="direccion" value={inmueble.direccion} onChange={handleChange} className="form-control" id="direccionInmuebles" placeholder="Ingrese dirección" />
                        </div>
                        <div className="row">
                        <div className="col">
                            <label className="form-label">Departamento</label>
                            <input name="departamento"  value={inmueble.departamento} onChange={handleChange} className="form-control" id="departamento" placeholder="Ingrese departamento" />
                        </div>
                        <div className="col">
                            <label className="form-label">Municipio</label>
                            <input name="municipio" value={inmueble.municipio} onChange={handleChange} className="form-control" id="municipio" placeholder="Ingrese municipio" />
                        </div>

                    </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" name="apartamentoFlag" onChange={handleChange} type="checkbox" checked={inmueble.apartamentoFlag} id="apartamentoFlag" />
                                <label className="form-check-label">
                                    Apartamento
                                </label>
                            </div>
                        </div>
                        {inmueble.apartamentoFlag ?
                            <div className="col">
                                <label className="form-label">Número apartamento</label>
                                <input name="apartamento" className="form-control" id="apartamento" disabled={!inmueble.apartamentoFlag} onChange={handleChange} placeholder="Ingrese apto" />
                            </div> : ''
                        }

                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" name="casaFlag" onChange={handleChange} type="checkbox" checked={inmueble.casaFlag} id="casaFlag" />
                                <label className="form-check-label">
                                    Casa
                                </label>
                            </div>
                        </div>

                        {inmueble.casaFlag ? <div className="col">
                            <label className="form-label">Número casa</label>
                            <input name="casa" className="form-control" id="casa" onChange={handleChange} placeholder="Ingrese número" />
                        </div> : ''}


                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" name="urbanizacionFlag" onChange={handleChange} type="checkbox" checked={inmueble.urbanizacionFlag} id="urbanizacionFlag" />
                                <label className="form-check-label">
                                    Urbanizacion
                                </label>
                            </div>
                        </div>

                        {inmueble.urbanizacionFlag ?
                            <div className="col">
                                <label className="form-label">Nombre urbanización</label>
                                <input className="form-control" name="urbanizacion" id="urbanizacion" onChange={handleChange} placeholder="Ingrese nombre" />
                            </div> : ''
                        }
                    </div>
                    <div className="row">
                        <div className="col">

                            <div className="form-check">
                                <input className="form-check-input" name="parqueaderoFlag" onChange={handleChange} type="checkbox" checked={inmueble.parqueaderoFlag} id="parqueaderoFlag" />
                                <label className="form-check-label">
                                    Parqueadero
                                </label>
                            </div>

                        </div>
                        {inmueble.parqueaderoFlag ?

                            <div className="col">
                                <label className="form-label">Número parqueadero</label>
                                <input className="form-control" name="parqueadero" id="parqueadero" onChange={handleChange} placeholder="Ingrese número" />
                            </div>
                            : ''}
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" name="cuartoUtilFlag" onChange={handleChange} type="checkbox" checked={inmueble.cuartoUtilFlag} id="cuarto" />
                                <label className="form-check-label">
                                    Cuarto util
                                </label>
                            </div>
                        </div>
                        {inmueble.cuartoUtilFlag ?

                            <div className="col">
                                <label className="form-label">Número cuarto util</label>
                                <input className="form-control" name="cuartoUtil" id="cuartoUtil" onChange={handleChange} placeholder="Ingrese número" />
                            </div> : ''
                        }
                    </div>
                    <div className="row">
                        <Button variant="success w-45 m-1" onClick={() => crearInmueble(inmueble,limpiarFormulario)}>Crear inmueble</Button>
                    </div>
                </form>
            </div>
        </>
    )
}