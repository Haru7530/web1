var alumnos=Array(
	Array("1","Ruben Valeriano","Montoya Luna","M","M"),
	Array("2","Isabel Valeria","Neira Romero","M","F"),
	Array("3","Rodrigo Mario","Romero Quispe","M","M"),
	Array("4","Elena Luz","Luna Marroquin","N","F"),
	Array("5","José María","Lopez Diaz","M","M"),
	Array("6","Erika Bony","Puma Coila","N","F"),
	Array("7","Francisco Asis","Mamani Chuctaya","N","M"),
	Array("8","Josefa Marin","Orozco Huanca","N","F"),
	Array("9","Rosa Tamara","Sarmiento Ylachoque","N","F"),
	Array("10","Richard Madue","Torres Aguilar","M","M"),
	Array("11","Suly Lesli","Rivarrey Quispe","M","F"),
	Array("12","Katia Beatriz","Valencia Chura","N","F"),
	Array("13","Bethy","Morales Llerena","M","F"),
	Array("14","Luis Antonio","Valencia Puma","N","M"),
	Array("15","Rolando Alfredo","Perez Manrique","M","M"),
	Array("16","María Rosario","Monson Flores","M","F"),
	Array("17","Lucero Ebony","Valencia Chura","M","F"),
	Array("18","Gustavo Enrique","Mamani Quispe","M","M")


	);


	var imagenes = ["f1.jpg","f2.jpg","f3.jpg","f4.jpg","f5.jpg","f6.jpg"]
const buclefnGenerarTabla = (valor)=>{
	for(var f =1; f<=valor; f++){
		let imagen="img/f"+f+",jpg"


	document.write("<table border=1px dashed green;>");
///document.write("Tabla...qw"+numero);
	document.write("<tr><th colspan= '3'>Datos</th></tr>");
document.write("<tr><td>Nombres</td> <td>Apellidos</td><td>"+alumnos[f-1][1]+","+imagenes[f-1][2]+"</td><td rowspan='3'><img src='img/f"+f+".jpg'></td></tr>");
document.write("<tr><td>Turno</td> <td>"+alumnos[f-1][3]+"</td></tr>");
document.write("<tr><td>Genero</td> <td>"+alumnos[f-1][4]+"</td></tr>");


document.write("<tr><th>colspan='3'</th></tr>");
document.write("</table><br>");
}
}


