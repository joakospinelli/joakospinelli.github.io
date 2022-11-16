import Proyecto from '../model/Proyecto';

import GuessMyNumber from './proyectos/guess-my-number.jpg';
import ModalWindow from './proyectos/modal-window.jpg';
import PigGame from './proyectos/pig-game.jpg';
import Portfolio from './proyectos/portfolio.jpg';
import Jueguitos from './proyectos/jueguitos.jpg';
import PokeAPI from './proyectos/pokeapi.jpg';

let ListaProyectos = [
    new Proyecto('PokéAPI',
                  `Página web que muestra información de todos los Pokemon, usando la API de 'pokeapi.co'.`,
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
    new Proyecto('Jueguitos',
                  `Proyecto final para la materia "Seminario de Lenguajes (JavaScript)" de Licenciatura en Sistemas.
                  Son 3 juegos: "Ahorcado" para jugar solo, y "Piedra, papel, tijera, lagarto, Spock" o "Ta-te-tí" para jugar de a 2 jugadores.`,
                  [ 'JavaScript', 'Express.JS', 'Node.JS', 'HTML', 'CSS' ],
                  Jueguitos,
                  'https://github.com/joakospinelli/jueguitos')
]

export default ListaProyectos;