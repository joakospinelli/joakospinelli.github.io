export default function Presentacion(){

    function getEdad() {
        let edad = Date.now() - new Date('2001','03','15');
        edad = new Date(edad);
        return Math.abs(edad.getUTCFullYear() - 1970);
    }

    
/*  ESTO SÓLO VA A ESTAR CUANDO ME LIBERE DE LA VERGUENZA  
    const changeImg = () => {
        const randomImg = [ "https://media.tenor.com/kB-Liucd8p4AAAAC/pepega-hackermans.gif",
                            "https://media.tenor.com/Z4Ks69TQz0wAAAAC/hacker-pepe.gif",
                            "https://media.tenor.com/ZmZ7UKIc0soAAAAC/anonymous-anonymous-bites-back.gif" ];

        const img = document.getElementById('img-perfil');
        
        let selected = img.src;

        while (selected === img.src)
            selected = randomImg[ Math.floor(Math.random() * randomImg.length) ];

        img.src = selected;
    } */

    return (
        <div className="col-info last-item">
            <h3 className="subtitle-accent">PRESENTACIÓN</h3>
            <p>
                Me llamo Joaquín, tengo {getEdad()} años y soy de La Plata.
                Ahora estoy estudiando Analista en TICs en la Universidad Nacional de La Plata, cursando el tercer año;
                mi objetivo es anotarme en todas las carreras de la facultad (terminarlas es otro tema).
                También hago cursos de Udemy y los dejo entre el 2% y 50%. Soy un entusiasta fundamentalista del tereré, 24/7 todo el año.
            </p>

            <p>
                Empecé a programar en 2019, cuando hice un curso de programación que dieron en la facultad para estudiantes de secundaria,
                y ahí decidí que iba a estudiar esto. Me interesa la programación orientada a objetos
                y el desarrollo Web (tanto Frontend como Backend).
            </p>

{/*         ESTO SÓLO VA A ESTAR CUANDO ME LIBERE DE LA VERGUENZA
            <div style={{ textAlign: 'center '}} onMouseEnter={changeImg}>
                <img src="https://media.tenor.com/ZmZ7UKIc0soAAAAC/anonymous-anonymous-bites-back.gif"
                            alt="rana con anteojos"
                            id="img-perfil"
                            className="img"></img>
            </div> */}

        </div>
    )
}