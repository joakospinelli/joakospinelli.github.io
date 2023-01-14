import Trabajo from '../model/Trabajo.js';

let ListaTrabajos = [
    new Trabajo('Desarrollador Full Stack Junior',
                'Dirección de Vialidad de la Provincia de Buenos Aires',
                ['Diseño Web y desarrollo Front End con Angular',
                 'Desarrollo de REST API y servicios de Back End con .NET',
                 'Manejo de bases de datos relacionales con SQL Server'],
                 new Date(2023,0,16),
                 null)
]

export default ListaTrabajos;