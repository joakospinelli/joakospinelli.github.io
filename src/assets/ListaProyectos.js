import Proyecto from '../model/Proyecto';

import GuessMyNumber from './proyectos/guess-my-number.jpg';
import ModalWindow from './proyectos/modal-window.jpg';
import PigGame from './proyectos/pig-game.jpg';
import Portfolio from './proyectos/portfolio.jpg';
import Jueguitos from './proyectos/jueguitos.jpg';

let ListaProyectos = [
    new Proyecto('Jueguitos',
                 `Proyecto final para la materia "Seminario de Lenguajes (JavaScript)" de Licenciatura en Sistemas.
                 Son 3 juegos: "Ahorcado" para jugar solo, y "Piedra, papel, tijera, lagarto, Spock" o "Ta-te-tí" para jugar de a 2 jugadores.`,
                 [ 'JavaScript', 'Express.JS', 'Node.JS', 'HTML', 'CSS' ],
                 Jueguitos,
                 'https://github.com/joakospinelli/jueguitos'),
                 new Proyecto('Portfolio',
                 `Proyecto final para "Argentina Programa: Yo programo". Portfolio personal que puede editarse desde el navegador iniciando sesión.
                 El cliente Web está hostado en Firebase, y el servidor está en Heroku.`,
                 [ 'Angular', 'TypeScript', 'CSS', 'HTML', 'Bootstrap', 'Spring Web', 'Spring Data JPA', 'Java', 'MySQL', 'JWT' ],
                 Portfolio,
                 'http://github.com/joakospinelli/Portfolio-ArgPrograma', 'https://jspinelli-portfolio.web.app'),
                new Proyecto('Guess my Number',
                             `Proyecto para el curso "The complete JavaScript course 2022" de Udemy.
                             Es un juego en el que hay que adivinar un número generado aleatoriamente, con 20 intentos posibles y dando una pista por cada intento fallido.`,
                             [ 'JavaScript', 'HTML', 'CSS' ],
                             GuessMyNumber,
                             'https://github.com/joakospinelli/guessMyNumber'),
                new Proyecto('Modal Window',
                             `Proyecto para el curso "The complete JavaScript course 2022" de Udemy.
                             Pruebas de JavaScript para modificar el DOM, usando eventos para activar y desactivar ventanas, modificando sus clases con CSS.`,
                             [ 'JavaScript', 'HTML', 'CSS' ],
                             ModalWindow,
                             'https://github.com/joakospinelli/modalWindow'),
                new Proyecto('Pig Game',
                             `Proyecto para el curso "The complete JavaScript course 2022" de Udemy.
                             Es un juego para dos jugadores en el que cada jugador tira un dado y suma puntos.
                             Gana el primero en llegar a 100 puntos.`,
                             [ 'JavaScript', 'HTML', 'CSS' ],
                             PigGame,
                             'https://github.com/joakospinelli/pigGame')
]

export default ListaProyectos;