function validar() {
    var nombre, correo, telefono;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    
    expresion = /\w+@\w+\.+[a-z]/;
    

    if(nombre === "" || correo === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if(nombre.length>100) {
        alert("El nombre y apellido es muy largo");
        return false;

    }
    else if(correo.length>100) {
        alert("El correo es muy largo");
        return false;
        
    }
    else if(!expresion.test(correo)) {
        alert("El correo no es válido");
        return false;
    }
    else if(telefono.length>10) {
        alert("El telefono es muy largo");
        return false;
        
    }
    else if(isNaN(telefono)) {
        alert("El telefono ingresado no es un número");
        return false;
    }


}

