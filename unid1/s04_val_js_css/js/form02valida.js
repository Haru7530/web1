const fnValidar02 = () => {

let xTexto = document.getElementById("txtTexto").value;

if(xTexto=="" || /^\s+$/.test(xTexto)) {  //  /^\s+$/   -> para que no haya espacios
    alert("Falta TEXTO...");
    return false;

}
}