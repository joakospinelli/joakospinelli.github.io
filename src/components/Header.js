import Container from 'react-bootstrap/Container';
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
                    nombre.textContent = '&#x200B;';
                    createName();
                } else nombre.textContent = nombreAct.join('');
            }, 70 * i);
        }
    }

    window.addEventListener('load', deleteName)

    const setActive = (e) => {
        if (!e.target.classList.contains('nav-link')) return;

        document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('nb-link-active'));
        e.target.closest('.nav-link').classList.add('nb-link-active');
    }

    return (
        <header className="header">
            <div className="text-header">
                <h1 onClick={ deleteName }>
                    <span id="nombre">Joaquín Spinelli</span>
                </h1>
                <p>
                    desarrollador web?
                </p>
            </div>

            <Navbar bg="none" expand="md" onClick={e => setActive(e)}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/">Sobre mí</Nav.Link>
                            <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
                            <Nav.Link as={Link} to="/educacion">Educación</Nav.Link>
                            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </header>
    )
}