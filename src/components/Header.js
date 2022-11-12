import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/header.css';

export default function Header(){

    function createName(){
        let nombreNuevo = 'Joaquín Spinelli';
        let nombreAct = [];

        for (let i=0;i < nombreNuevo.length;i++){

            setTimeout(() => {
                const chars = [...nombreNuevo];
                nombreAct[i] = chars[i];
                if (i < (nombreNuevo.length - 1))
                    nombreAct[i + 1] = '_';
                
                setNombre(nombreAct.join(''));
            }, 70 * i)

        }
    }
    const [ nombre, setNombre ] = useState('');

    window.addEventListener('load', createName)

    return (
        <header className="header">
            <div className="text-header">
                <h1 onClick={ createName }>
                    {nombre}
                </h1>
                <p>
                    desarrollador web?
                </p>
            </div>

            <Nav fill className="navbar">
                <Nav.Item>
                    <Link to="/"><span className="nb-link">Sobre mí</span></Link>
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