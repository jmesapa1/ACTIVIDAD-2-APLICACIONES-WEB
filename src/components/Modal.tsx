import { State } from "@popperjs/core";
import { SetStateAction, useEffect, useState } from "react";
import { Accordion, Button, Form, Modal } from "react-bootstrap";
import { Inmueble } from "../types";
import { getInmuebles, postInmueble } from "../services/inmuebleService";
import FormularioInmueble from "./FormularioInmueble";
type FormularioProps = {
    handleClose: () => void,
    crearInmueble: (inmueble:Inmueble)=> void
    modalCrear: boolean}
export default function Formulario({ handleClose, modalCrear, crearInmueble }: FormularioProps) {

   

    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={modalCrear} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear inmueble</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <section className="section">
                            <div className="container-xl">

                                <h4>Completa los campos para continuar</h4>
                                <div className="row mt-2">
                                </div>

                                <FormularioInmueble crearInmueble={crearInmueble}></FormularioInmueble>


                            </div>

                        </section>
                    </Modal.Body>

                </Modal>
            </div>
        </>
    )

}