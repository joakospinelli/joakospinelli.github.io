import AngularLogo from './competencias/angular.png';
import BootstrapLogo from './competencias/bootstrap.svg';
import CssLogo from './competencias/css.png';
import ExpressLogo from './competencias/expressjs.png';
import GitLogo from './competencias/git.png';
import HtmlLogo from './competencias/html.png';
import JavaLogo from './competencias/java.png';
import JavascriptLogo from './competencias/javascript.png';
import MysqlLogo from './competencias/mysql.png';
import NodejsLogo from './competencias/nodejs.png';
import ReactLogo from './competencias/react.png';
import ScrumLogo from './competencias/scrum.png';
import SpringLogo from './competencias/spring.svg';

import Logo from '../model/LogoCompetencias.js';

let Angular = new Logo(AngularLogo, 'Angular (Básico)');
let Bootstrap = new Logo(BootstrapLogo, 'Bootstrap');
let Css = new Logo(CssLogo, 'CSS');
let Express = new Logo(ExpressLogo, 'Express.JS');
let Git = new Logo(GitLogo, 'Git');
let Html = new Logo(HtmlLogo, 'HTML');
let Java = new Logo(JavaLogo, 'Java');
let Javascript = new Logo(JavascriptLogo, 'JavaScript');
let Mysql = new Logo(MysqlLogo, 'MySQL');
let Scrum = new Logo(ScrumLogo, 'Scrum Agile');
let Nodejs = new Logo(NodejsLogo, 'Node.JS');
let React = new Logo(ReactLogo, 'React (Básico)');
let Spring = new Logo(SpringLogo, 'Spring (Básico)');

const listaCompetencias = [ Java, Javascript, Html, Css, Bootstrap, Git, Express, Nodejs, Mysql, Scrum,
                            Angular, React, Spring ];

export {
    listaCompetencias
}