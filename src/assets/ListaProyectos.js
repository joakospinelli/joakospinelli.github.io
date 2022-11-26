import Proyecto from '../model/Proyecto';

import GuessMyNumber from './proyectos/guess-my-number.jpg';
import ModalWindow from './proyectos/modal-window.jpg';
import PigGame from './proyectos/pig-game.jpg';
import Jueguitos from './proyectos/jueguitos.jpg';
import PokeAPI from './proyectos/pokeapi.jpg';
import Bankist from './proyectos/bankist.jpg';
import Mapty from './proyectos/mapty.jpg';
import Forkify from './proyectos/forkify.jpg';

let ListaProyectos = [
    new Proyecto('PokéAPI',
                  `Página web que muestra información de todos los Pokemon a través de la API "pokeapi.co".`,
                  [ 'React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap' ],
                  PokeAPI,
                  'https://github.com/joakospinelli/PokeAPI', 'https://joakospinelli.github.io/PokeAPI/'),
    new Proyecto('Guess my Number',
                  `Proyecto para el curso "The complete JavaScript course 2022" de Udemy.
                  Es un juego en el que hay que adivinar un número generado aleatoriamente, con 20 intentos posibles y dando una pista por cada intento fallido.`,
                  [ 'JavaScript', 'HTML', 'CSS' ],
                  GuessMyNumber,
                  'https://github.com/joakospinelli/guessMyNumber', 'https://joakospinelli.github.io/guessMyNumber/'),
    new Proyecto('Modal Window',
                  `Proyecto para el curso "The complete JavaScript course 2022" de Udemy.
                  Pruebas de JavaScript para modificar el DOM, usando eventos para activar y desactivar ventanas, modificando sus clases con CSS.`,
                  [ 'JavaScript', 'HTML', 'CSS' ],
                  ModalWindow,
                  'https://github.com/joakospinelli/modalWindow', 'https://joakospinelli.github.io/modalWindow/'),
    new Proyecto('Pig Game',
                  `Proyecto para el curso "The complete JavaScript course 2022" de Udemy.
                  Es un juego para dos jugadores en el que cada jugador tira un dado y suma puntos.
                  Gana el primero en llegar a 100 puntos (por algún motivo misterioso se lagea demasiado cuando lo abrís).`,
                  [ 'JavaScript', 'HTML', 'CSS' ],
                  PigGame,
                  'https://github.com/joakospinelli/pigGame', 'https://joakospinelli.github.io/pigGame/'),
    new Proyecto('Bankist',
                  `Proyecto para el curso "The complete JavaScript course 2022" de Udemy.
                  Página Web que simula el funcionamiento de un sistema de Home Banking. El sistema funciona a través de eventos,
                  comprobaciones, timers y operaciones sobre arreglos y fechas.
                  Los elementos se modifican dinámicamente según los resultados de las operaciones que realice el usuario.`,
                  [ 'JavaScript', 'HTML', 'CSS' ],
                  Bankist,
                  'https://github.com/joakospinelli/Bankist', 'https://joakospinelli.github.io/Bankist/'),
    new Proyecto('Mapty',
                  `Proyecto para el curso "The complete JavaScript course 2022" de Udemy.
                  Página Web en la que se pueden marcar distintos puntos de interés interactuando con un mapa, a través de la
                  geolocalización del dispositivo. Permite asignarle datos personalizados a cada punto, y muestra el clima
                  del lugar a través de la API pública "open-meteo.com".`,
                  [ 'JavaScript', 'HTML', 'CSS', 'Leaflet' ],
                  Mapty,
                  'https://github.com/joakospinelli/Mapty', 'https://joakospinelli.github.io/Mapty'),
    new Proyecto('Forkify',
                `Proyecto para el curso "The complete JavaScript course 2022" de Udemy.
                Página Web para buscar recetas online. Permite buscar recetas por el nombre, agregar recetas propias, guardarlas en favoritos
                y cambiar la cantidad de ingredientes para hacer la cantidad de porciones deseada.
                Las búsquedas funcionan por los nombres de los platos en inglés.`,
                [ 'JavaScript', 'HTML', 'CSS', 'NPM' ],
                Forkify,
                'https://github.com/joakospinelli/Forkify', 'https://forkify-jspinelli.netlify.app/'),
    new Proyecto('Jueguitos',
                  `Proyecto final para la materia "Seminario de Lenguajes (JavaScript)" de Licenciatura en Sistemas.
                  Son 3 juegos: "Ahorcado" para jugar solo, y "Piedra, papel, tijera, lagarto, Spock" o "Ta-te-tí" para jugar de a 2 jugadores.`,
                  [ 'JavaScript', 'Express.JS', 'Node.JS', 'HTML', 'CSS', 'Bootstrap' ],
                  Jueguitos,
                  'https://github.com/joakospinelli/jueguitos')
]

export default ListaProyectos;