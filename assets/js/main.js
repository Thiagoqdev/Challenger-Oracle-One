/*função para fazer a imagem sumir e aparecer o texto ja criptografado*/

function hideImage() {
  document.getElementById("nenhumaMessagem").style.visibility = "hidden";
  document.getElementById("comMensagem").style.visibility = "visible";
}


/* ----- a cripitografia usada segue esses parametros abaixos:-----

A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/

function codificar() {
  let palavra = document.getElementById("txtEntrada").value;

  hideImage();
  palavra = palavra.replaceAll("e", "enter");
  palavra = palavra.replaceAll("i", "imes");
  palavra = palavra.replaceAll("a", "ai");
  palavra = palavra.replaceAll("o", "ober");
  palavra = palavra.replaceAll("u", "ufat");

  document.getElementById("txtResultado").innerHTML = palavra;
}

function decodificar() {
  let palavraD = document.getElementById("txtEntrada").value;

  hideImage();
  palavraD = palavraD.replaceAll("enter", "e");
  palavraD = palavraD.replaceAll("imes", "i");
  palavraD = palavraD.replaceAll("ai", "a");
  palavraD = palavraD.replaceAll("ober", "o");
  palavraD = palavraD.replaceAll("ufat", "u");

  document.getElementById("txtResultado").innerHTML = palavraD;
}

/*função para copiar*/

function copiar(){
  var textoCriptografado = txtResultado.value;
  if (navigator.clipboard.writeText(textoCriptografado)) {

      document.getElementById('copiar').textContent = "Copiado!";
  }

  setInterval(function() {
      document.getElementById('copiar').textContent = "Copiar";
  } , 6000
  );
}
