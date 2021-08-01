 

function calcular(){
    var valor1 = Number(document.getElementById('numero1').value);
    var valor2 = Number(document.getElementById('numero2').value);
    var operacion= document.getElementById('operacion').value;
    var resultado = 0;

    if(operacion == "+"){
        resultado = valor1+valor2;
        document.getElementById('resultado').innerHTML="Resultado: "+resultado;
        console.log(resultado);
    }
    if(operacion == "-"){
        resultado = valor1-valor2;
        document.getElementById('resultado').innerHTML="Resultado: "+resultado;
        console.log(resultado);
    }
    if(operacion == "*"){
        resultado = valor1*valor2;
        document.getElementById('resultado').innerHTML="Resultado: "+resultado;
        console.log(resultado);
    }
    if(operacion == "/"){
        resultado = valor1/valor2;
        document.getElementById('resultado').innerHTML="Resultado: "+resultado;
        console.log(resultado);
    }
}