export default function Presentacion(){

    function getEdad() {
        let edad = Date.now() - new Date('2001','03','15');
        edad = new Date(edad);
        return Math.abs(edad.getUTCFullYear() - 1970);
    }

    return (
        <div className="col-info">
            <h3 className="subtitle-accent">PRESENTACIÓN</h3>
            <p>
                Me llamo Joaquín, tengo {getEdad()} años y soy de La Plata.
                Ahora estoy estudiando Analista en TICs en la Universidad Nacional de La Plata, cursando el tercer año;
                mi objetivo es anotarme en todas las carreras de la facultad, menos la de Ingeniería (terminarlas es otro tema).
                También hago cursos de Udemy y los dejo entre el 2% y 50%.
            </p>

            <p>
                Empecé a programar en 2019, cuando hice un curso de programación que dieron en la facultad para estudiantes de secundaria,
                y ahí decidí que iba a estudiar esto. Me interesa la programación orientada a objetos
                y el desarrollo Web (tanto Frontend como Backend).
            </p>

            <p style={{ borderBottom: '#FF3164 solid 1px', paddingBottom: '7%'}}>
                Cuando no estoy estudiando me gusta dormir, jugar en la PC y dibujar. Soy un entusiasta fundamentalista del tereré, 24/7 todo el año.
            </p>
        </div>
    )
}