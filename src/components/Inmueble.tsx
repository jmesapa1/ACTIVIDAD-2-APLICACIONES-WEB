import type { Inmueble } from "../types"

type InmuebleProps = {
    inmueble: Inmueble
    deleteFunction: (item: Inmueble) => void
}

export default function Inmueble({ inmueble, deleteFunction }: InmuebleProps) {

    const { idInmueble, direccion, departamento, municipio, apartamentoFlag, apartamento, casaFlag, casa, urbanizacionFlag, urbanizacion, parqueaderoFlag, parqueadero, cuartoUtilFlag, cuartoUtil} = inmueble


    return (
        <div className="col-md-3 my-4 row align-items-center">
            <div className="card ">
                <div className="card-body">
                    <h5 className="card-title">Inmueble número {Number(idInmueble)}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Dirección: {direccion}</h6>
                    <p className="card-text">departamento: {departamento}</p>
                    <div>
                        <a >municipio: {municipio}</a>
                    </div>
                    <div>
                        {apartamentoFlag?<a >apartamento: {apartamento}</a>:''}
                        {casaFlag?<a >casa: {casa}</a>:''}
                        {urbanizacionFlag?<a >urbanizacion: {urbanizacion}</a>:''}
                        {parqueaderoFlag?<a >parqueadero: {parqueadero}</a>:''}
                        {cuartoUtilFlag?<a >cuarto util: {cuartoUtil}</a>:''}
                    </div>
                </div>
                <div className="card-footer  gap-3">
                    <div className="row">
                    <button type="button" className="btn btn-danger m-auto" onClick={() => deleteFunction(inmueble)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}