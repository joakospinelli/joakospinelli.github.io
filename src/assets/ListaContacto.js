import Contacto from '../model/Contacto';

import Email from './contacto/email.png';
import Github from './contacto/github.png';
import Instagram from './contacto/instagram.png';
import Linkedin from './contacto/linkedin.png';

const ListaContacto = [
    new Contacto('Email', 'mailto:joakospinelli@gmail.com', Email),
    new Contacto('GitHub', 'https://github.com/joakospinelli', Github),
    new Contacto('Instagram', 'https://instagram.com/joakospinelli', Instagram),
    new Contacto('Linkedin', 'https://linkedin.com/in/joaquin-spinelli', Linkedin)
]

export default ListaContacto;