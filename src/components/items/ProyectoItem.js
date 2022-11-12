import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../../assets/styles/proyectos.css';

import { useOutletContext } from 'react-router-dom';

export default function ProyectoItem(){

    const item = useOutletContext();

    return (
        <Col className="col-info" style={{ borderBottom: '#ff3164 1px solid', paddingBottom: '5%' }}>
            <h4 className="subtitle-accent">
                {item.nombre.toUpperCase()}
            </h4>

            <img src={`${item.img}`} className="proyecto-img" alt={item.nombre.toLowerCase()}/>
            <p>
                {item.descripcion}
            </p>

            <div style={{ marginBottom: '5%' }}>
                <Button className="btn-repo" href={`${item.repositorio}`} target="_blank" rel="noreferrer">Ver repositorio</Button>
                {item.demo ? <Button className="btn-demo" href={`${item.demo}`} target="_blank">Ver demo</Button> : <></> }
            </div>

            <p className="subtitle-main">
                TECNOLOGÍAS UTILIZADAS
            </p>

            <ul>
                {item.tecnologias.map((tec, i) => {
                    return <li key={i}>
                        {tec}
                    </li>
                })}
            </ul>

        </Col>
    )
}