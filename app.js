// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Se declara la variable amigos como un array
let amigos = [];
//Se declara la variable amigoSorteado como una variable global
function agregarAmigo () {
    //Se obtiene el valor del input
    let nombre = document.getElementById('amigo').value;
    //Se valida que el input no este vacio
    if (nombre === "") {
        //Se manda una alerta usuario
        alert('De favor, ingrese un nombre.');
    }
    // Se agrega el nombre a la lista de amigos
    amigos.push(nombre);
    // Se limpia el campo de texto
    document.getElementById('amigo').value = '';
    // Se actualiza la lista de amigos
    document.getElementById('listaAmigos').innerHTML = "";
   // console.log(amigos);
    // Se recorre el array de amigos y se muestra en la lista
    for (let i = 0; i < amigos.length; i++) {
        // Se crea un elemento li para cada amigo
        let li = document.createElement('li');
        // Se agrega el texto del amigo a la lista  
        li.textContent = amigos[i];
        // Se agrega el elemento li a la lista de amigos
        document.getElementById('listaAmigos').appendChild(li);
        // Se muestra el array de amigos en la consola
        //console.log(amigos);
    }
    return;
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
let resultado;
function sortearAmigo(){
    // Paso 1: Validar que haya amigos disponibles
  // 1. Validar que haya amigos disponibles
  if (amigos.length === 0) {
    //Se muestra un mensaje de error en la consola
    alert("El array de amigos está vacío. Por favor, agrega amigos antes de sortear.");
    //Se muestra un mensaje de error en el html
    return;// Detener ejecución si no hay amigos
    }
    // Paso 2: Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Paso 3: Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    // Paso 4: Mostrar el resultado
    document.getElementById('resultado').innerHTML =`El amigo sorteado es: ${amigoSorteado}`;
    setTimeout(()=>{
        amigos=[];
        //Se manda  llamar a la funcion acutlizar amigos
        actualizarListaAmigos();
        //Se limpias los datos y despues de  3 segundos se reincia el juego
        document.getElementById('amigo').value = '';
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = '';alert("El juego se ha reiniciado. ¡Agrega nuevos amigos para jugar de nuevo!");
    }, 3000)     
}  

