
class Trabajo {

    constructor(nombre, lugar, responsabilidades, fechaInicio, fechaFin=null){
        this.nombre = nombre;
        this.lugar = lugar;
        this.responsabilidades = responsabilidades;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}

export default Trabajo;