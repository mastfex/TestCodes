var texto="Hello world desde archivo js"

alert (texto);
console.log(texto);

var parrafo = document.getElementById('textoParrafo');
console.log(parrafo);

titulo.style.color='red';


var comparar= 2;

if(comparar < 4)
{
    console.log(comparar+" Es menor que 4");
}

function calcular() {
    var numero1 = Number(document.getElementById('numero1').value);
    var numero2 = Number(document.getElementById('numero2').value);
    var resultado = numero1 + numero2;

    document.getElementById('resultado').textContent= resultado;
}


