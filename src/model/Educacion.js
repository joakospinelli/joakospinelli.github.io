
class Educacion {
    
    constructor(titulo, institucion, tipo, promedio = null, descripcion = null, fechaInicio, fechaFin = null, certificado = null){
        this.titulo = titulo; this.institucion = institucion; this.tipo = tipo;
        this.fechaInicio = fechaInicio; this.fechaFin = fechaFin;
        this.promedio = promedio; this.descripcion = descripcion;
        this.certificado = certificado;
    }

    get terminado(){
        return (this.fechaFin != null) && (this.fechaFin < new Date());
    }

    get año(){
        return this.fechaInicio.getFullYear();
    }
}

export default Educacion;