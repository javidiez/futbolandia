let imgEquip;
let imgJugador;
let imgEntrenador;

// Campos de primer formulario

const escudoInput = document.getElementById('escudo_input');
const equipoInput = document.getElementById('equipo_input');
const dtInput = document.getElementById('dt_input');
const imagenEntrenadorInput = document.getElementById('imagen_entrenador_input');

const escudoEquipo = document.getElementById('escudo_equipo');
const nombreEquipo = document.getElementById('nombre_equipo');
const dtEquipo = document.getElementById('dt_equipo');
const fotoEntrenador = document.getElementById('imagen_dt');



const botonGuardar = document.getElementById('boton_guardar');


// Campos de segundo formulario

const nombreJugadorInput = document.getElementById('nombre_jugador');
const apellidoJugadorInput = document.getElementById('apellido_jugador');
const cumpleanosJugadorInput = document.getElementById('cumpleanos_jugador');
const nacionalidadJugadorInput = document.getElementById('nacionalidad_jugador');
const posicionJugadorInput = document.getElementById('posicion_jugador');
const dorsalJugadorInput = document.getElementById('dorsal_jugador');
const pesoJugadorInput = document.getElementById('peso_jugador');
const alturaJugadorInput = document.getElementById('altura_jugador');
const pieFavoritoInput = document.querySelector('input[name="pieHabil"]:checked').value;
const titularJugadorInput = document.getElementById('titular');
const suplenteJugadorInput = document.getElementById('suplente');
const imagenJugadorInput = document.getElementById('imagen_jugador');


const botonAnadir = document.getElementById('boton_anadir');

const arqueroCancha = document.getElementById('arquero_cancha');
const def2cancha = document.getElementById('def_2_cancha');
const def3cancha = document.getElementById('def_3_cancha');
const def4cancha = document.getElementById('def_4_cancha');
const def6cancha = document.getElementById('def_6_cancha');
const med5cancha = document.getElementById('med_5_cancha');
const med8cancha = document.getElementById('med_8_cancha');
const med10cancha = document.getElementById('med_10_cancha');
const del9cancha = document.getElementById('del_9_cancha');
const del7cancha = document.getElementById('del_7_cancha');
const del11cancha = document.getElementById('del_11_cancha');

const acordionSuplente = document.getElementById('acordion_suplente');


// Tabla de jugadores

const equipoTitular = document.getElementById('equipo_titular');
const equipoSuplente = document.getElementById('equipo_suplente');


escudoInput.addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imgEquip = e.target.result;
            console.log('Image uploaded:', imgEquip);
        };

        reader.readAsDataURL(file);
    }
});

imagenEntrenadorInput.addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imgEntrenador = e.target.result;
            console.log('Image uploaded:', imgEntrenador);
        };

        reader.readAsDataURL(file);
    }
});

imagenJugadorInput.addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imgJugador = e.target.result;
            console.log('Image uploaded:', imgJugador);
        };

        reader.readAsDataURL(file);
    }
});

function dataEquipo() {
    if (equipoInput.value != "" && dtInput.value != "") {

        escudoEquipo.innerHTML = `<img src="${imgEquip}" class="img-fluid escudo" alt="escudo">`;
        nombreEquipo.innerText = equipoInput.value;
        dtEquipo.innerText = 'DT: ' + dtInput.value;
        fotoEntrenador.innerHTML = `<img src="${imgEntrenador}" class="img-fluid avatar_dt" alt="entrenador">`;;

    }
    else {
        alert('Falta completar el nombre del Equipo o el Entrenador');
    }
}

function crearJugadores() {
    if (nombreJugadorInput.value != "") {
        if (posicionJugadorInput.value == "Arquero (1)" && titularJugadorInput.checked) {
            let nameArquero = document.createElement('p');
            arqueroCancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameArquero.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            arqueroCancha.appendChild(nameArquero);
        }
        else if (posicionJugadorInput.value == "Defensor central (2)" && titularJugadorInput.checked) {

            let nameDef2 = document.createElement('p');
            def2cancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameDef2.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            def2cancha.appendChild(nameDef2);
        }
        else if (posicionJugadorInput.value == "Lateral izquierdo (3)" && titularJugadorInput.checked) {

            let nameDef3 = document.createElement('p');
            def3cancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameDef3.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            def3cancha.appendChild(nameDef3);
        }
        else if (posicionJugadorInput.value == "Lateral derecho (4)" && titularJugadorInput.checked) {

            let nameDef4 = document.createElement('p');
            def4cancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameDef4.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            def4cancha.appendChild(nameDef4);
        }
        else if (posicionJugadorInput.value == "Mediocampista central (5)" && titularJugadorInput.checked) {

            let nameMed5 = document.createElement('p');
            med5cancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameMed5.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            med5cancha.appendChild(nameMed5);
        }
        else if (posicionJugadorInput.value == "Defensor central (6)" && titularJugadorInput.checked) {

            let nameDef6 = document.createElement('p');
            def6cancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameDef6.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            def6cancha.appendChild(nameDef6);
        }
        else if (posicionJugadorInput.value == "Delantero derecho (7)" && titularJugadorInput.checked) {

            let nameDel7 = document.createElement('p');
            del7cancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameDel7.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            del7cancha.appendChild(nameDel7);
        }
        else if (posicionJugadorInput.value == "Mediocampista derecho (8)" && titularJugadorInput.checked) {

            let nameMed8 = document.createElement('p');
            med8cancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameMed8.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            med8cancha.appendChild(nameMed8);
        }
        else if (posicionJugadorInput.value == "Delantero central (9)" && titularJugadorInput.checked) {

            let nameDel9 = document.createElement('p');
            del9cancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameDel9.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            del9cancha.appendChild(nameDel9);
        }
        else if (posicionJugadorInput.value == "Mediocampista izquierdo (10)" && titularJugadorInput.checked) {

            let nameMed10 = document.createElement('p');
            med10cancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameMed10.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            med10cancha.appendChild(nameMed10);
        }
        else if (posicionJugadorInput.value == "Delantero izquierdo (11)" && titularJugadorInput.checked) {

            let nameDel11 = document.createElement('p');
            del11cancha.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
            nameDel11.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
            del11cancha.appendChild(nameDel11);

        }

    }
  
}

function crearTablaJugadores() {
    if (nombreJugadorInput.value != "" && titularJugadorInput.checked) {

        const pieFavoritoInput = document.querySelector('input[name="pieHabil"]:checked').value;


        let fila = document.createElement('tr');
        fila.classList.add('table-primary', 'align-content-center','jugadores_titulares');

        let celdaDorsal = document.createElement('td');
        celdaDorsal.innerText = dorsalJugadorInput.value;
        fila.appendChild(celdaDorsal);
        equipoTitular.appendChild(fila);

        let celdaAvatar = document.createElement('td');
        celdaAvatar.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
        fila.appendChild(celdaAvatar);
        equipoTitular.appendChild(fila);

        let celdaNombre = document.createElement('td');
        celdaNombre.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
        fila.appendChild(celdaNombre);
        equipoTitular.appendChild(fila);

        let celdaNacionalidad = document.createElement('td');
        celdaNacionalidad.innerText = nacionalidadJugadorInput.value;
        fila.appendChild(celdaNacionalidad);
        equipoTitular.appendChild(fila);

        let celdaNacimiento = document.createElement('td');
        celdaNacimiento.innerText = cumpleanosJugadorInput.value;
        fila.appendChild(celdaNacimiento);
        equipoTitular.appendChild(fila);

        let celdaPosicion = document.createElement('td');
        celdaPosicion.innerText = posicionJugadorInput.value;
        fila.appendChild(celdaPosicion);
        equipoTitular.appendChild(fila);

        let celdaAltura = document.createElement('td');
        celdaAltura.innerText = alturaJugadorInput.value;
        fila.appendChild(celdaAltura);
        equipoTitular.appendChild(fila);

        let celdaPeso = document.createElement('td');
        celdaPeso.innerText = pesoJugadorInput.value + ' Kg';
        fila.appendChild(celdaPeso);
        equipoTitular.appendChild(fila);

        let celdaPie = document.createElement('td');
        celdaPie.innerText = pieFavoritoInput;
        fila.appendChild(celdaPie);
        equipoTitular.appendChild(fila);
  

    }
    else if(titularJugadorInput.checked == false){
        let fila = document.createElement('tr');
        fila.classList.add('table-warning', 'align-content-center','jugadores_suplentes');

        let celdaDorsal = document.createElement('td');
        celdaDorsal.innerText = dorsalJugadorInput.value;
        fila.appendChild(celdaDorsal);
        equipoSuplente.appendChild(fila);

        let celdaAvatar = document.createElement('td');
        celdaAvatar.innerHTML = `<img src="${imgJugador}" class="img-fluid avatar" alt="">`;
        fila.appendChild(celdaAvatar);
        equipoSuplente.appendChild(fila);

        let celdaNombre = document.createElement('td');
        celdaNombre.innerText = nombreJugadorInput.value + " " + apellidoJugadorInput.value;
        fila.appendChild(celdaNombre);
        equipoSuplente.appendChild(fila);

        let celdaNacionalidad = document.createElement('td');
        celdaNacionalidad.innerText = nacionalidadJugadorInput.value;
        fila.appendChild(celdaNacionalidad);
        equipoSuplente.appendChild(fila);

        let celdaNacimiento = document.createElement('td');
        celdaNacimiento.innerText = cumpleanosJugadorInput.value;
        fila.appendChild(celdaNacimiento);
        equipoSuplente.appendChild(fila);

        let celdaPosicion = document.createElement('td');
        celdaPosicion.innerText = posicionJugadorInput.value;
        fila.appendChild(celdaPosicion);
        equipoSuplente.appendChild(fila);

        let celdaAltura = document.createElement('td');
        celdaAltura.innerText = alturaJugadorInput.value;
        fila.appendChild(celdaAltura);
        equipoSuplente.appendChild(fila);

        let celdaPeso = document.createElement('td');
        celdaPeso.innerText = pesoJugadorInput.value + ' Kg';
        fila.appendChild(celdaPeso);
        equipoSuplente.appendChild(fila);

        let celdaPie = document.createElement('td');
        celdaPie.innerText = pieFavoritoInput;
        fila.appendChild(celdaPie);
        equipoSuplente.appendChild(fila);

        let listaSuplente = document.createElement('li');
        listaSuplente.innerHTML = `<i class="fa-solid fa-futbol"></i> ${nombreJugadorInput.value} ${apellidoJugadorInput.value} (${dorsalJugadorInput.value})`;
        acordionSuplente.appendChild(listaSuplente);


    }
    else{
        alert("Tiene que completar al menos Nombre y Apellido");
    }
}



botonGuardar.addEventListener('click', dataEquipo);
botonAnadir.addEventListener('click', crearJugadores);
botonAnadir.addEventListener('click', crearTablaJugadores);



// CARTEL VERDE TEMPORAL AL AÑADIR UN JUGADOR

$(document).ready(function () {
    $("#success-alert").hide();
    $("#boton_anadir").click(function showAlert() {
        $("#success-alert").fadeTo(1500, 500).slideUp(500, function () {
            $("#success-alert").slideUp(500);
        });
    });
});


// LIMPIAR FORMULARIOS LUEGO DE AÑADIR
document.addEventListener('DOMContentLoaded', function () {
    let formulario = document.getElementById('alta_jugadores_formulario');
    botonAnadir.addEventListener('click', function () {
        formulario.reset();
    });
});

// LIMPIAR FORMULARIOS LUEGO DE AÑADIR
document.addEventListener('DOMContentLoaded', function () {
    let formulario = document.getElementById('alta_equipo_formulario');
    botonGuardar.addEventListener('click', function () {
        formulario.reset();
    });
});

// BUSCADOR CON RESULTADOS EN VIVO
document.addEventListener('keyup', e =>{

    if(e.target.matches('#buscador_tit')){

        if(e.key === 'Escape') e.target.value = "";

        document.querySelectorAll('.jugadores_titulares').forEach(jug =>{
            jug.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            ? jug.classList.remove('filtro')
            : jug.classList.add('filtro')
        })

    }
})

document.addEventListener('keyup', e =>{

    if(e.target.matches('#buscador_supl')){

        if(e.key === 'Escape') e.target.value = "";

        document.querySelectorAll('.jugadores_suplentes').forEach(jug =>{
            jug.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            ? jug.classList.remove('filtro')
            : jug.classList.add('filtro')
        })

    }
})