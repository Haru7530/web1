const fnValidar05 = () => {

    //RESUMEN 
    //1) Formulario con elemento HTML  que tenga name y id
    //2) Un eventoque desencadene una funcion con retorno true or false
    //3) Prueba logica para verificar si se ha escrito o no se ha escrito

    var xTexto = document.getElementById("txtTexto").value;
    if(!(/^\d{3}\s\d{3}\s\d{3}$/.test(xTexto))) {
        alert("Escriba 9 numeros agrupos entre 3 y separados por un espacio...");
        return false;
    }

    var xNumero = document.getElementById("txtNumero").value;
    if(!(/^\d{9}$/.test(xNumero))) {
        alert("Falta numeros...");
        return false;
    }

    var xFijo= document.getElementById("txtFijo").value;
    if(!(/^05[45]\s\d{6}$/.test(xFijo))) {
        alert("Numero de telefono fijo...");
        return false;
    }
    
}