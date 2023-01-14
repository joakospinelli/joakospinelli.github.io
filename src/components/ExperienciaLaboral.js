import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TrabajoItem from './items/TrabajoItem.js';
import ListaTrabajos from '../assets/ListaTrabajos.js';

import { useEffect } from 'react';
import { setActiveItem } from '../util/setNavbar.js';

export default function ExperienciaLaboral(){

    useEffect(() => {
        setActiveItem('explaboral');
    },[]);

    return (
        <Container style={{ padding: '5%' }}>
            <Row className="justify-content-md-center">
                <Col md={3} className="col-menu">
                    <h4 className="subtitle-main">EXPERIENCIA LABORAL</h4>


                </Col>
                <Col md="6" className="col-info">
                    { ListaTrabajos.map((item,i) => <TrabajoItem item={item} key={i}></TrabajoItem>) }
                </Col>
            </Row>

        </Container>
    )
}