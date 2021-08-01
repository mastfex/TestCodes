 

function muestraOpcion(){
    var opcion= document.getElementsByName('eleccion');
    console.log(opcion);

    for(let i=0; i < opcion.length ; i++){
        if(opcion[i].checked){
            alert(opcion[i].value);
            document.getElementById('resultado').innerHTML="Has seleccionado : "+opcion[i].value;
        }
    }
}