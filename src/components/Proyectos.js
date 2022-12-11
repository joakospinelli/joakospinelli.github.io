import '../assets/styles/proyectos.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

import ListaProyectos from '../assets/ListaProyectos';

export default function Proyectos(){

    let tecnologias = [];

    const listaOriginal = ListaProyectos.map((proyecto, i) => {
        proyecto.id = i;
        return proyecto;
    });
    
    const [ proyectos, setProyectos ] = useState(listaOriginal);

    listaOriginal.forEach(i => { tecnologias = tecnologias.concat(i.tecnologias) });

    tecnologias = Array.from(new Set(tecnologias));

    const filtrarTecnologias = () => {
        const select = document.getElementById('select-tecnologias');
        select.blur();
        
        if (select.value === '') {
            setProyectos(listaOriginal);
            return;
        }
        
        setProyectos(listaOriginal.filter(i => i.tecnologias.includes(select.value)));
    }

    return (
        <Container style={{ padding: '5%' }}>
            <Row className="justify-content-md-center">
                <Col md="4" className="col-menu">
                    <h4 className="subtitle-main">PROYECTOS REALIZADOS</h4>
                    <p>Filtrar por tecnología:</p>
                    <Form.Select id="select-tecnologias" onChange={filtrarTecnologias}>
                        <option default value="">Todos</option>
                        {
                            tecnologias.map((tec, i) => {
                                return <option key={i} value={tec}>{tec}</option>
                            })
                        }
                    </Form.Select>
                    <ul>
                        { proyectos.map((proyecto, i) => {
                            return <li key={i}>
                                <h4>
                                    <Link to={`${proyecto.id}`}>{proyecto.nombre.toUpperCase()}</Link>
                                </h4>
                            </li>
                        })}
                    </ul>

                </Col>
                <Col md="6">
                    <Outlet context={ ListaProyectos[useParams().proyectoId] }/>
                </Col>
            </Row>

        </Container>
    )
}