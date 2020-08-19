function validar(){
 
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var telefono = document.getElementById("telefono").value;
    var pass = document.getElementById("pass").value;
    expresion = /\w+@\w+\.+[a-z]/; //para validar el correo que tenga arroba y punto
    console.log(expresion.test(correo)); //valia la expresion de correo, true o false @ y punto
    var saludo = "Bienvenido " + nombre + " " + apellidos + ", su usuario es: " + usuario + " y su contraseña es " + pass + ".";

    if (nombre  === "" || apellidos === "" || correo === "" || usuario === "" || telefono === "" || pass === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellidos.length> 80){
        alert("El apellido es muy largo");
        return false;
    }
    else if (correo.length > 100){
        alert("El correo es muy largo");
        return false;
    }
    else if (usuario.length > 20){
        alert("El usuario es muy largo");
        return false;
    }
    else if(telefono.length > 15){
        alert("El telefono es muy largo");
        return false;
    }
    else if (!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }
    else if (isNaN(telefono)){
        alert("El telefono no es un numero");
        return false;
    }
    else {
        alert (saludo);
    }
}





