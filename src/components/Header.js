import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import '../assets/styles/header.css';

export default function Header(){

    const nombreNuevo = 'Joaquín Spinelli';

    function createName(){
        let nombreAct = [];
        const nombre = document.getElementById('nombre');

        for (let i=0;i < nombreNuevo.length;i++){

            setTimeout(() => {
                const chars = [...nombreNuevo];
                nombreAct[i] = chars[i];
                if (i < (nombreNuevo.length - 1))
                    nombreAct[i + 1] = '_';
                
                nombre.textContent = nombreAct.join('');
            }, 70 * i)

        }
    }

    function deleteName(){

    const nombre = document.getElementById('nombre');
        let nombreAct = nombre.textContent.split('');

        for (let i = nombreAct.length; i > 0; i--){

            setTimeout(() => {
                nombreAct.pop();

                if (nombreAct.length === 0) {
                    nombre.textContent = '_';
                    createName();
                } else nombre.textContent = nombreAct.join('');
            }, 70 * i);
        }
    }

    window.addEventListener('load', deleteName)

    return (
        <header className="header">
            <div className="text-header">
                <h1 onClick={ deleteName }>
                    <span id="nombre">Joaquín Spinelli</span>
                </h1>
                <p>&lt;desarrollador Web/&gt;</p>
            </div>

            <Navbar bg="none" expand="md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav fill className="m-auto">
                            <Nav.Link as={Link} to="/" id="sobre-mi">Sobre mí</Nav.Link>
                            <Nav.Link as={Link} to="/proyectos" id="proyectos">Proyectos</Nav.Link>
                            <Nav.Link as={Link} to="/explaboral" id="explaboral">Trabajo</Nav.Link>
                            <Nav.Link as={Link} to="/educacion" id="educacion">Educación</Nav.Link>
                            <Nav.Link as={Link} to="/contacto" id="contacto">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </header>
    )
}