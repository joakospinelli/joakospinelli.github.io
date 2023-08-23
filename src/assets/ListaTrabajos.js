import Trabajo from '../model/Trabajo.js';

let ListaTrabajos = [
    new Trabajo('Desarrollador Java',
                'Dirección Provincial de Mejora Administrativa',
                ['Desarrollo y mantenimiento del sistema de documentación electrónica de la provincia de Buenos Aires',
                'Desarrollo Web con Java Spring',
                'Implementación y uso de servicios Web SOAP y REST',
                'Manejo de bases de datos SQL y ORM con Hibernate',
                'Implementación de interfaces de usuario con ZKoss'],
                new Date(2023,5,15),
                null),
    new Trabajo('Desarrollador Full Stack Junior',
                'Dirección de Vialidad de la Provincia de Buenos Aires',
                ['Desarrollo de sistemas administrativos para uso interno por los distintos departamentos',
                'Implementación de interfaces de usuario y desarrollo Front End con Angular',
                'Desarrollo de REST API y servicios de Back End con .NET',
                'Manejo de bases de datos con SQL Server'],
                new Date(2023,0,16),
                new Date(2023,5,14))
]

export default ListaTrabajos;