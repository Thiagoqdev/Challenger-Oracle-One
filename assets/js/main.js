/*
A letra "a" é convertida para "ai"
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

function hideImage() {
  document.getElementById("nenhumaMessagem").style.visibility = "hidden";
  document.getElementById("comMensagem").style.visibility = "visible";
}

function codificar() {
  let palavra = document.getElementById("txtEntrada").value;

  hideImage();

  palavra = palavra.replaceAll("a", "ai");
  palavra = palavra.replaceAll("e", "enter");
  palavra = palavra.replaceAll("i", "imes");
  palavra = palavra.replaceAll("o", "ober");
  palavra = palavra.replaceAll("u", "ufat");

  document.getElementById("txtResultado").innerHTML = palavra;
}

function decodificar() {
  let palavra = document.getElementById("txtEntrada").value;

  hideImage();

  palavra = palavra.replaceAll("ai", "a");
  palavra = palavra.replaceAll("enter", "e");
  palavra = palavra.replaceAll("imes", "i");
  palavra = palavra.replaceAll("ober", "o");
  palavra = palavra.replaceAll("ufat", "u");

  document.getElementById("txtResultado").innerHTML = palavra;
}

document.getElementById('copiar').addEventListener('click', copiar);

function copiar(){
  document.querySelector("#txtResultado").select();
  document.execCommand("copy");
}

/*
function copyText(text) {
  const input = document.createElement('input');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
}
*/