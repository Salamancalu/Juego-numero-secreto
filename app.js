let numeroSecreto = 0;
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto) {
    let titulo = document.querySelector(elemento); 
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsurio = parseInt(document.getElementById('valorUsuario').value); //Aqui tendria disponible el valor

    console.log(intentos);
    if (numeroDeUsurio === numeroSecreto) {
        asignarTextoElemento('p' , `Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' :'veces' }`);

        // Activar boton nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        //El usuario no acerto el numero.
        if (numeroDeUsurio > numeroSecreto) {
            asignarTextoElemento ('p' , 'El numero secreto es menor');
        } else { 
            asignarTextoElemento ('p' , 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
}

function condicionesIniciales () {

    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Indica un numero del 1 al 10'); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
 }

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value ='';
}

function reiniciarJuego() {
    // 1. Limpiar la caja 
    limpiarCaja();
    // 2. Indicar mensaje de inicio 
    // 3. Generar el numero aleatorio
    // 5. Inicializar el numero de intentos
    condicionesIniciales();
    // 4. Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}

condicionesIniciales();

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1; 
}

