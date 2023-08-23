import Educacion from '../model/Educacion';

let ListaEducacion = [
    new Educacion('Analista en TIC', 'Universidad Nacional de La Plata', 'Universitario',
                  7.71, 'Porcentaje de aprobación: 95,83%.', new Date(2020, 0, 27)),
    new Educacion('Licenciatura en Sistemas', 'Universidad Nacional de La Plata', 'Universitario',
                  7.71, 'Porcentaje de aprobación: 70,27%.', new Date(2020, 0, 27)), 
    new Educacion('Bachiller en Artes Visuales', 'Bachillerato de Bellas Artes', 'Secundario',
                  8.32, 'Especialidad en Grabado, Composición Experimental.',  new Date(2013, 2, 8), new Date(2019, 11, 9)),
                  new Educacion('The Complete JavaScript Course 2023', 'Udemy', 'Curso',
                                null, null, new Date(2022, 4, 8), new Date(2022, 10, 20), 'https://ude.my/UC-c567cbda-0525-44ef-a681-a1e72d6db8e1'),
    new Educacion('Curso completo de Java 2022', 'Udemy', 'Curso',
                  null, null, new Date(2022, 10, 28), new Date(2022, 11, 7), 'https://ude.my/UC-40c00890-a38c-42fc-93b0-6fc3604d8d61/'),
    new Educacion('Argentina Programa - Yo Programo', 'Ministerio de Desarrollo Productivo', 'Curso',
                  null, 'Segunda etapa de Argentina Programa.',  new Date(2022, 0, 1), new Date(2022, 7, 31)),
    new Educacion('Argentina Programa - Sé Programar', 'Ministerio de Desarrollo Productivo', 'Curso',
                   null, 'Primera etapa de Argentina Programa.',  new Date(2021, 9, 17), new Date(2021, 11, 27), 'https://mumuki.io/argentina-programa/certificates/verify/U4aYA3iikj6-O86X')           
]

export default ListaEducacion;