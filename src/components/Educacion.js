import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EducacionItem from './items/EducacionItem';

import ListaEducacion from '../assets/ListaEducacion';
import { useEffect } from 'react';
import { setActiveItem } from '../util/setNavbar';

export default function Educacion(){

    useEffect(() => {
        setActiveItem('educacion');
    },[]);

    return(
        <Container style={{ padding: '5%' }}>
        <Row className="justify-content-md-center">
            <Col md="2" className="col-menu">
                <h4 className="subtitle-main">
                    EDUCACIÓN
                </h4>
            </Col>
            <Col className="col-info">
                <Row>
                    { ListaEducacion.map((ed, i) => {
                        return <EducacionItem item={ed} key={i}/>
                    })}
                </Row>
            </Col>
        </Row>
    </Container>
    )
}