import Col from 'react-bootstrap/Col';

import '../../assets/styles/educacion.css';
import { formatDateDDMMYY } from '../../util/dateFormatter';

export default function EducacionItem(props){

    const item = props.item;

    return (
        <Col className="col-ed" md="5">
            <h4 className="subtitle-accent" style={{ marginBottom: '5%', marginTop: '5%' }}>
                {item.titulo.toUpperCase()}
            </h4>

            <p>{item.institucion} - {item.tipo}.</p>

            <p className="p-detail">
                {formatDateDDMMYY(item.fechaInicio)} - {item.terminado ? formatDateDDMMYY(item.fechaFin) : 'En curso'}
                </p>
            <ul>
                { item.promedio ? <li>Promedio: {item.promedio}</li> : <></> }
                { item.descripcion ? <li>{item.descripcion}</li> : <></> }
                { item.certificado ? <li>Certificado: <a className="ed-link" target="_blank" rel="noreferrer noopener" href={item.certificado}>click acá.</a></li> : <></> }
            </ul>
        </Col>
    )
}