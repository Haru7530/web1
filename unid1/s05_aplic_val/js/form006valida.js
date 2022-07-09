function fnValidar06()
{
    var xGenero = document.getElementById("1stGenero".value);
    if(xGenero=="")
    {
        alert("Seleccione Genero...");
        return false;
    }
    var xResult = document.getElementById("txtResult").value;
    if(xResult==""|| xResult==0)

    {
        alert("Revice... Resultado ¿0 o Vacio=?)");
        return false;
    }
    return true;
}
function verConteo(genero, mtzAlumnos)

{
    contadorGenero =0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[4]==genero){
                contadorGenero++;
            }
        });
    }
    document.getElementById("txtResult").value = contadorGenero;
}