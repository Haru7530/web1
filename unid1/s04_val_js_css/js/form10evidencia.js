const fnValidar10 = () => {


    //RESUMEN 
    //1) Formulario con elemento HTML  que tenga name y id
    //2) Un evento que desencadene una funcion con retorno true or false
    //3) Prueba logica para verificar si se ha escrito o no se ha escrito

    let xNombre = document.getElementById("txtNombre").value;

    if(xNombre=="" || /^\s+$/.test(xNombre)) {  //  /^\s+$/   -> para que no haya espacios
        alert("Falta Nombre...");
        return false;
    }

    let xEdad = document.getElementById("txtEdad").value;

    if(xEdad=="" || /^\s+$/.test(xEdad)) {
        alert("Falta Edad...");
        return false;
    }

    return true;

}