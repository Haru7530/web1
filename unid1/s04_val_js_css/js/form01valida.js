const fnValidar01 = () => {
    
    //RESUMEN 
    //1) Formulario con elemento HTML  que tenga name y id
    //2) Un eventoque desencadene una funcion con retorno true or false
    //3) Prueba logica para verificar si se ha escrito o no se ha escrito


    let xTexto = document.getElementById("txtTexto").value;

    if(xTexto=="" || /^\s+$/.test(xTexto)) {  //  /^\s+$/   -> para que no haya espacios
        alert("Falta TEXTO...");
        return false;
    }

    let xNumero = document.getElementById("txtNumero").value;

    if(xNumero=="" || /^\s+$/.test(xNumero)) {
        alert("Falta NUMERO...");
        return false;
    }

  //alert("Hola Mundo");
    return true;
}