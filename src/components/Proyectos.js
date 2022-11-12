import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Outlet, Link, useParams } from 'react-router-dom';

import ListaProyectos from '../assets/ListaProyectos';

export default function Proyectos(){

    return (
        <Container style={{ padding: '5%' }}>
            <Row className="justify-content-md-center">
                <Col md="4" className="col-menu">
                    <h4 className="subtitle-main">PROYECTOS REALIZADOS</h4>
                    <ul>
                        { ListaProyectos.map((proyecto, i) => {
                            return <li key={i}>
                                <h4>
                                    <Link to={`${i}`}>{proyecto.nombre.toUpperCase()}</Link>
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