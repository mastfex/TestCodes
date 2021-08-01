 
function listaPersonas(){
    var listaPersonas=[
        {
            rut:"17316789-7",
            nombre: "Jose",
            apellido: "Gonzalez",
            edad:32
        },
        {
            rut:"15316589-7",
            nombre: "Marisol",
            apellido: "Perez",
            edad:45
        },
        {
            rut:"18316589-K",
            nombre: "Francisco",
            apellido: "Gutierrez",
            edad:25
        }
    ];

    return listaPersonas;
}

function listarPersonas(){
    var comboBox= document.getElementById('optionlist');

    for(var i=0; i<listaPersonas().length ; i++){
        var opcion = document.createElement('option');
        console.log(listaPersonas()[i].rut);
        opcion.innerHTML =listaPersonas()[i].rut; // Para que se despliegue en el combo.
        opcion.setAttribute("name","select");
        opcion.value=listaPersonas()[i].rut; // Se setea el valor de la opcion.
        comboBox.appendChild(opcion);
    }
    
}

function getInfoPersona(){
    var seleccion = document.getElementById('optionlist').value;
    var div = document.getElementById('infoPersona');
    var h3= document.createElement('h3');
    var ul= document.getElementById('info');
    if(div.childElementCount>0){
        div.innerHTML='';
        ul.innerHTML='';
    }
    
    for(var x=0; x<listaPersonas().length ; x++){
        console.log(seleccion);
        if(listaPersonas()[x].rut==seleccion){
            h3.textContent="Detalle Persona";
            div.appendChild(h3);
            var li= document.createElement('li');
            li.innerHTML= "Nombre: "+listaPersonas()[x].nombre;
            var li2= document.createElement('li');
            li2.innerHTML= "Apellido: "+listaPersonas()[x].apellido;
            var li3= document.createElement('li');
            li3.innerHTML= "Edad: "+listaPersonas()[x].edad;
            ul.appendChild(li);
            ul.appendChild(li2);
            ul.appendChild(li3);    
        }
    }
    div.appendChild(ul);
}