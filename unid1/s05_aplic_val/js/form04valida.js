function fnValidar04()
{
	 var xTurno =document.getElementById("1stTurno").value;
     if(xTurno=="")
     {
         alert("Seleccione Turno...");
         return false;
     }
     var xResult =document.getElementById("txtResult").value;
     if(xResult=="" || xResult==0)
     {
         alert("Revice... Resultado ¿0 o Vacio?)");
         return false;
     }
     return true;
}

function verConteo(turno, mtzAlumnos)
{
	contadorTurno =0;
    if(mtzAlumnos.length > 0) {
        mtzAlumnos.forEach(element => {
           if(element[3]==turno){
               contadorTurno++;
           } 
        });

    }
    document.getElementById("txtResult").value = contadorTurno;
}