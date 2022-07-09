function fnValidar02()
{
 
}






//esto es del 8












function verTablas(turnoElegido,generoElegido , mtzAlumnos)
{
    contadorTurno = 0;
    contadorGenero = 0;
    orden =0;
    res="";


t01 = "<table border='1'>";
t01 += "<tr><th class='titulo' colspan='3'>Datos personales</th></tr>";

t01 += "<tr><th>No.</th><th>Apellidos y Nombres</th> <th>Genero</th> </tr>";

if(mtzAlumnos.length > 0) {
    for (var i =0; i < mtzAlumnos.length; i++) {
        turnoMtz = mtzAlumnos[i][3];
        generoMtz= mtzAlumnos[i][4];
        if (turnoMtz == turnoElegido && generoMtz == generoElegido ){
            orden++;
            apeNom = mtzAlumnos[i][2] +","+mtzAlumnos[i][1];
            genero = fnGenero(mtzAlumnos[i][4]);
            t01 += "<tr>";
            t01 += "<td> "+orden+"</td> <td> "+apeNom+" </td> <td> "+genero+" </td>";

            t01 += "</tr>";
            contadorTurno++;
            contadorGenero++;
            }
            
        }   
    }   


    
t01 += "</table>";}







function verTablas(turnoElegido, mtzAlumnos,mtzAlumnos1, generoElegido)
{
    contadorTurno = 0;
    orden =0;
    res="";


t01 = "<table border='1'>";
t01 += "<tr><th class='titulo' colspan='3'>Datos personales</th></tr>";

t01 += "<tr><th>No.</th><th>Apellidos y Nombres</th> <th>Genero</th> </tr>";

if(mtzAlumnos.length > 0 ) {
    for (var i =0; i < mtzAlumnos.length; i++) {
        turnoMtz = mtzAlumnos[i][3];
        generoMtz= mtzAlumnos[i][4];
        if (turnoMtz == turnoElegido ){
            orden++;
            apeNom = mtzAlumnos[i][2] +","+mtzAlumnos[i][1];
            genero = fnGenero(mtzAlumnos[i][4]);
            
                t01 += "<tr>";
                t01 += "<td> "+orden+"</td> <td> "+apeNom+" </td> <td> "+genero+" </td>";

                t01 += "</tr>";
                contadorTurno++;
        if( generoMtz == generoElegido){
            orden++;
            apeNom = mtzAlumnos[i][2] +","+mtzAlumnos[i][1];
            genero = fnGenero(mtzAlumnos[i][5]);
        
            t01 += "<tr>";
            t01 += "<td> "+orden+"</td> <td> "+apeNom+" </td> <td> "+genero+" </td>";

            t01 += "</tr>";
            contadorTurno++;
            }
        }
        }   
    }
t01 += "</table>";

document.getElementById("marco").innerHTML = t01;
}
 
function fnGenero(xGenero){
	if(xGenero=="M"){
        return "Masculino";
    } else if(xGenero=="F"){
        return "Femenino"
    }
}



function borrarMarco(){
	document.getElementById("marco").innerHTML = "Resultado Borrado..."
}