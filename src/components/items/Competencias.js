import { listaCompetencias } from '../../assets/ListaCompetencias.js'

import '../../assets/styles/sobre-mi.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Competencias(){

    return (
        <div>
            <h3 className="subtitle-accent col-info">HERRAMIENTAS Y TECNOLOGÍAS</h3>

            <Container>
                <Row>
                    {listaCompetencias.map((logo, i) => {
                        return <Col md="3" key={i} className="col-competencia" style={{ animationDelay:`${i * 0.1}s` }}>
                            <img src={logo.img} alt={logo.desc} className="logo"></img>
                            <p>{logo.desc}</p>
                        </Col>
                    })}
                </Row>
            </Container>
        </div >
    )
}