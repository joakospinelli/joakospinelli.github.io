import Col from 'react-bootstrap/Col';
import '../../assets/styles/trabajo.css';

import { formatDateMMYY } from '../../util/dateFormatter';

export default function ProyectoItem(props){

    const item = props.item;


    return (
        <Col className="col-info trabajo-item">
            <span className="p-detail trabajo-fecha"> {formatDateMMYY(item.fechaInicio)} - {item.fechaFin ? formatDateMMYY(item.fechaFin) : 'Presente'}.</span>
            <h4 className="subtitle-accent">{item.nombre.toUpperCase()}</h4>
            <p>En {item.lugar}.</p>

            <p className="subtitle-main">TAREAS Y RESPONSABILIDADES:</p>
            <ul className="ul-trabajo">
                {item.responsabilidades.map((item, i) => 
                    <li key={i} className="li-trabajo">{item}</li>
                )}
            </ul>
        </Col>
    )
}