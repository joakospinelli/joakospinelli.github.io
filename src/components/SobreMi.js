import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { setActiveItem } from '../util/setNavbar';

export default function SobreMi(){

    useEffect(() => {
        setActiveItem('sobre-mi');
    },[]);

    return (
        <Container style={{ padding: '5%' }}>
            <Row className="justify-content-md-center">
                <Col md="3" className="col-menu">
                    <h4 className="subtitle-main">SOBRE MÍ</h4>
                    
                    <ul>
                        <li>
                            <h4><Link to="/">PRESENTACIÓN</Link></h4>
                        </li>
                        <li>
                            <h4><Link to="competencias">COMPETENCIAS</Link></h4>
                        </li>
                    </ul>

                </Col>
                <Col md="6">
                    <Outlet/>
                </Col>
            </Row>

        </Container>
    )
}