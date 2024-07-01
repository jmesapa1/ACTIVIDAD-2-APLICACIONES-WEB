import { State } from '@popperjs/core';
import { Button } from 'react-bootstrap';

type HeaderProps = {

}

export default function Header({}: HeaderProps) {
    return (
        <nav className="navbar bg-light ">
            <div className="container-fluid d-flex justify-content-center">
                <a className="navbar-brand" href="#">GENERADOR DE INMUEBLES</a>
            </div>
        </nav>
    )

}