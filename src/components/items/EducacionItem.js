import Col from 'react-bootstrap/Col';

import '../../assets/styles/educacion.css';

export default function EducacionItem(props){

    const item = props.item;

    const formatDate = (date) => {
        let newDate = [ ...date.toISOString().split("T")[0].split("-") ];
        newDate = [ newDate[2], newDate[1], newDate[0] ];
        return newDate.join("/");
    }

    return (
        <Col className="col-ed" md="5">
            <h4 className="subtitle-accent" style={{ marginBottom: '5%', marginTop: '5%' }}>
                {item.titulo.toUpperCase()}
            </h4>

            <p>{item.institucion} - {item.tipo}.</p>

            <p className="p-detail">
                {formatDate(item.fechaInicio)} - {item.terminado ? formatDate(item.fechaFin) : 'En curso'}
                </p>
            <ul>
                { item.promedio ? <li>Promedio: {item.promedio}</li> : <></> }
                { item.descripcion ? <li>{item.descripcion}</li> : <></> }
                { item.certificado ? <li>Certificado: <a className="ed-link" target="_blank" rel="noreferrer noopener" href={item.certificado}>click acá.</a></li> : <></> }
            </ul>
        </Col>
    )
}