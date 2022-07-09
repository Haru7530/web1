const fnValidar03 = () => {

	//RESUMEN 
    //1) Formulario con elemento HTML  que tenga name y id
    //2) Un eventoque desencadene una funcion con retorno true or false
    //3) Prueba logica para verificar si se ha elegido

	let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia="";
	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked){
			valorElegidoPreferencia = elementoPref[i].value;
			eligioPreferencia =true;

		}
	}

	let elementoEstado =document.getElementsByName("radEstado");
	let valorElegidoPreEstado ="";
	let eligioEstado = false;
	for(let i=0; i<elementoEstado.length; i++) {
		if(elementoEstado[i].checked){
			valorElegidoPreEstado = elementoEstado[i].value;
			eligioEstado = true;
		}
	}
	if(!eligioPreferencia){
		alert("Elija una Preferencia...");
		return false;
	}else{
		alert("Su preferencia elegida es " +valorElegidoPreferencia);
	}	
	if(!eligioEstado){
		alert("Elija un Estado civil...");
		return false;
	}else{
		alert("Su Estado civil es " + valorElegidoPreEstado);
	}	 
	
	//alert(elementoPref);

	return true;
}