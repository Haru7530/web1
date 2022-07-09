
function fnGenerarTabla(res,numero,nomApe,tur,gen,orden)
{
///	for(var f =1; f<=cantidad; f++){

	var imagenes = ["f1.jpg","f2.jpg","f3.jpg","f4.jpg","f5.jpg","f6.jpg"]
const buclefnGenerarTabla = (orden)=>{
	for(var f =1; f<=orden; f++){
		let imagen="img/f"+f+",jpg"


	document.write("<table border='1'>");
///document.write("Tabla...qw"+numero);
	document.write("<tr><th colspan '3'>Datos</th></tr>");
document.write("<tr><td>#</td>Nombres</td> <td>Apellidos</td> </tr>"+alumnos[f-1][1]+","+imagenes[f-1][2]+"</td><td rowspan='3'><img src='img/f"+f+".jpg'></td></tr>");
///	document.write("<tr>");
	//for(var c=0; c<3; c++){
///		document.write("<td>1</td>");
///		document.write("<td>Juan</td>");
///		document.write("<td>Rivera Diaz</td>");
///	document.write("</tr>");
///	document.write("</table>");
}
}
document.write("<tr><th>colspan='3'</th></tr>");
document.write("</table><br>");
}
function fnTurno(turno)
{
	document.write("<tr><td>#</td>Turno</td> </tr>"+turno[f-1][3]+"</td></tr>");

}

function fnGenero(genero)
{
	document.write("<tr><td>#</td>Genero</td> </tr>"+genero[f-1][4]+"</td></tr>");
}

