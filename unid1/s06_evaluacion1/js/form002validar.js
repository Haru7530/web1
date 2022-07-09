//const fnValidar02 = () => {
function fnValidar02() {
    let xTexto = document.getElementById("txtTexto").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)) { 
        alert("Falta TEXTO...");
        return false;
    }else if( /^[0-9]+$/i.test(xTexto)){
        //}else if(/^[A-Z]+$/i.test(xTexto)){
        alert(" SOLO TEXTO...");
        return false;
    }
    let xGenero = document.getElementsByName("txtGenero");
    let valorgenero = "";
    let eligiogenero =false;
    for(let i=0; i <xGenero.length; i++){
        if(xGenero[i].checked){
            valorgenero=xGenero[i].value;
            eligiogenero=true;
        }
    }

    if(!eligiogenero){
        alert("Elija un Genero...");
        return false;
    }else{
        alert("Su genero es " + valorgenero);
    }
    
    let xPreferencia = document.getElementsByName("txtPreferencia");
    let valorpreferencia="";
    let eligioPreferencia=false;
    for(let i=0; i <xPreferencia.length;i++){
        if(xPreferencia[i].checked){
            valorpreferencia=xPreferencia[i].value;
            eligioPreferencia=true;
        }
    }
    if(valorpreferencia==2){
        alert("solo 2")
        return false;
    }
    if(!eligioPreferencia){
        alert("Elija una preferencia...");
        return false;
    }else{
        alert("Su preferencia elegida es " + valorpreferencia);
    }
    return true;
}