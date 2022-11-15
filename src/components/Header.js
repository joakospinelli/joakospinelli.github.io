import Nav from 'react-bootstrap/Nav';
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
        if (!e.target.classList.contains('nb-link')) return;

        document.querySelectorAll('.nb-link').forEach(nl => nl.classList.remove('nb-link-active'));
        e.target.closest('.nb-link').classList.add('nb-link-active');
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

            <Nav fill className="navbar" onClick={e => setActive(e)}>
                <Nav.Item>
                    <Link to="/"><span className="nb-link nb-link-active">Sobre mí</span></Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/proyectos"><span className="nb-link">Proyectos</span></Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/educacion"><span className="nb-link">Educación</span></Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/contacto"><span className="nb-link">Contacto</span></Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}