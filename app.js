/*
let titulo = document.querySelector('h1'); //Este método nos ayuda a seleccionar elementos que están en el archivo index.html
//titulo no es una variable sino un objeto
let parrafo = document.querySelector('p');

titulo.innerHTML = 'Juego del número secreto';
parrafo.innerHTML = 'Indica un número';
*/

// function VerificarUsuario(){ //Declaración de la función 'intentoDeUsuario'
//     // let numeroDeUsuario = document.querySelector('input').value; otra forma de obtener el valor
//     let numeroDeUsuario = document.getElementById('valorUsuario').value;
//     numeroDeUsuario = parseInt(numeroDeUsuario) //Convertir la variable a tipo 'número'
//     console.log(numeroDeUsuario);
//     console.log(typeof(numeroSecreto)); //Consulta del tipo de la variable con el 'typeof'
//     console.log(numeroSecreto);
//     console.log(typeof(numeroSecreto)); //Consulta del tipo de la variable con el 'typeof'
//     console.log(numeroSecreto == numeroDeUsuario) //Verificación de la igualdad de ambas variables
//     console.log(numeroSecreto === numeroDeUsuario) //verificación de la igualdad entre valor y tipo
//     return;
// }

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();

function asignarNombreElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //Este método nos ayuda a seleccionar elementos que están en el archivo index.html
    elementoHTML.innerHTML = texto;
}

function VerificarUsuario(){ //Declaración de la función 'intentoDeUsuario'
    // let numeroDeUsuario = document.querySelector('input').value; otra forma de obtener el valor
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    numeroDeUsuario = parseInt(numeroDeUsuario) //Convertir la variable a tipo 'número'
    console.log (`Llevas ${intentos} intentos`)
    //factorial (numeroDeUsuario);

    if (numeroSecreto === numeroDeUsuario){
        asignarNombreElemento('p', `¡Felicidades! Acertaste el número en ${intentos} ${(intentos == 1)? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#botonIntentar').setAttribute('disabled' , 'true');

    } else{
        limpiarCaja();
        intentos++;
        if (numeroSecreto > numeroDeUsuario){
            asignarNombreElemento('p' , 'El número secreto es mayor');
        } else asignarNombreElemento('p' , 'El número secreto es menor')
    }
    return;
}

function condicionesIniciales() {
    asignarNombreElemento('h1', 'Juego del número secreto');
    asignarNombreElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#botonIntentar').removeAttribute('disabled'); //Habilitar el botón de intentos
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 
    //Al usar queryselector por el id, se debe indicar el numeral (#) y así el programa reconoce la búsqueda como tal.
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
    
}

function generarNumeroSecreto() {
    let numeroGenerado = (Math.floor(Math.random()*numeroMaximo) + 1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarNombreElemento('p' , 'Juego finalizado. Agotaste todos los intentos posibles');
        console.log("Se acabaron los intentos");
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){ //Verifica si el número está en la lista
            return generarNumeroSecreto(); //Recursividad de la función, en donde se llama a si misma.
        }else{
                listaNumerosSorteados.push(numeroGenerado); //Incluye el número generado al final de la lista
                return numeroGenerado;
            }
    }
    
}

/*function factorial (numero){
    let X = numero ;
    while(numero > 1){
        X = X * (numero - 1)
        numero --;
    }
    return console.log(X)
}*/

