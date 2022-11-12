import Educacion from '../model/Educacion';

let ListaEducacion = [
    new Educacion('Analista en TIC', 'Universidad Nacional de La Plata', 'Universitario',
                  7.76, 'Porcentaje de aprobación: 77,27%.', new Date(2020, 0, 27)),
    new Educacion('Licenciatura en Sistemas', 'Universidad Nacional de La Plata', 'Universitario',
                  7.76, 'Porcentaje de aprobación: 43,59%.', new Date(2020, 0, 27)), 
    new Educacion('Bachiller en Artes Visuales', 'Bachillerato de Bellas Artes', 'Secundario',
                  8.32, 'Especialidad en Grabado, Composición Experimental.',  new Date(2013, 2, 8), new Date(2019, 11, 9)),
    new Educacion('Argentina Programa - Yo Programo', 'Ministerio de Desarrollo Productivo', 'Curso',
                  null, 'Segunda etapa de Argentina Programa. Curso terminado; pendiente de corrección.',  new Date(2022, 0, 1), new Date(2022, 7, 31)),
    new Educacion('Argentina Programa - Sé Programar', 'Ministerio de Desarrollo Productivo', 'Curso',
                   null, 'Primera etapa de Argentina Programa.',  new Date(2021, 9, 17), new Date(2021, 11, 27))           
]

export default ListaEducacion;