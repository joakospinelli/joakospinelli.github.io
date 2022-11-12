import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/styles/contacto.css';

import ListaContacto from '../assets/ListaContacto';

export default function Contacto(){

    return (
        <Container style={{ padding: '5%' }}>
            <Row className="justify-content-md-center">
                <div style={{textAlign: 'center'}} className="col-menu">
                    <h2 className="subtitle-accent">REDES Y CONTACTO</h2>
                </div>
                <Col>
                    <Row>
                        {ListaContacto.map((contacto, i) => {
                            return <Col md="3" key={i} className="col-contacto" style={{ animationDelay:`${i * 0.1}s` }}>
                                <a  href={`${contacto.link}`} target="_blank" rel="noreferrer">
                                    <img src={contacto.logo} alt={contacto.nombre.toLowerCase()} className="logo-contacto"></img>
                                </a>
                                <h4 className="subtitle-main">{contacto.nombre}</h4>
                            </Col>
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}