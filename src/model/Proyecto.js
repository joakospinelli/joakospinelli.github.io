
class Proyecto {

    constructor(nombre, descripcion, tecnologias, img, repositorio, demo = '') {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tecnologias = tecnologias;
        this.repositorio = repositorio;
        this.img = img;
        this.demo = demo;
    }

}

export default Proyecto;