
const textoInput = document.getElementById("textoRespuesta");
const textOutput = document.getElementById("respuesta");
const human = document.getElementById("human")
const tituloInput = document.getElementById("tituloInput")
const output = document.querySelector(".output")
const copiar = document.getElementById("copiar")
const cajaCopiar = document.getElementById("cajaCopiar")
let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"],];
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"



function btnEncriptar(){
    if (textoInput.value != ""){
        const textoEncriptado = encriptar(textoInput.value);
        textOutput.innerHTML = textoEncriptado;
        pressBtn()} else {
        condicionesInicionales()
    }
}

function btnDesencriptar(){
    if(textoInput.value != ""){
        const textoDesencriptado = desencriptar(textoInput.value);
    textOutput.innerHTML = textoDesencriptado;
    pressBtn()} else {
        condicionesInicionales()
    }
}

function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();
    stringEncriptado = stringEncriptado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return  stringEncriptado;
}

function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return  stringDesencriptado;
}

//Agrega las condiciones que se requieren después
//de cualquiera de los dos botones 
function pressBtn(){
    human.style.display = "none"
    tituloInput.style.display = "none"
    textOutput.style.top = "0"
    textOutput.style.fontSize = "2em"
    output.style.textAlign = "justify"
    textoInput.value = ""
    cajaCopiar.style.display = "block"
    copiar.style.visibility = "visible"
}

//Regresa a las condiciones iniciales en caso de que no haya texto
function condicionesInicionales() {
    cajaCopiar.style.display = "none"
    tituloInput.style.display = "block"
    textOutput.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar"
    textOutput.style.fontSize = "1em"
    output.style.textAlign = "center"
    copiar.style.visibility = "hidden"
    if(screen.width > 768){
        human.style.display = "inline-block"
        textOutput.style.top = "19vh"
    }else {
        human.style.display = "none"
        textOutput.style.top = "0"
    }
}

function btnCopiar() {

    //Creo un <textarea> temporal para copiar el texto porque el navegador no admite copiarlo directamente del <p>
    const textarea = document.createElement("textarea");
    textarea.value = textOutput.textContent;
    document.body.appendChild(textarea);

    //Efectuo la copia en el portapapeles
    textarea.select();
    document.execCommand('copy');

    //Eliminar el <textarea> temporal
    document.body.removeChild(textarea);
}