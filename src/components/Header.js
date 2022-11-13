import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/header.css';

export default function Header(){

    const nombreNuevo = 'Joaquín Spinelli';

    function createName(){
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

    function deleteName(){

        let nombreAct = nombre.split('');

        for (let i = nombreAct.length; i > 0; i--){

            setTimeout(() => {
                nombreAct.pop();

                if (nombreAct.length === 0) {
                    setNombre('&#x200B;');
                    createName();
                } else setNombre(nombreAct.join(''));
            }, 70 * i);
        }
    }
    
    const [ nombre, setNombre ] = useState('');

    window.addEventListener('load', createName)

    return (
        <header className="header">
            <div className="text-header">
                <h1 onClick={ deleteName }>
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