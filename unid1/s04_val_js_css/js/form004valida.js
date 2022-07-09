const fnValidar004 = () => {


    let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia="";
	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked){
			valorElegidoPreferencia = elementoPref[i].value;
			eligioPreferencia =true;
			
		}
	}
	




	

	if(eligioPreferencia!=1||eligioPreferencia!=2){
		alert("Elija una Preferencia...");
		return false;
	
	
	}else{
		alert("Su")
		return false;
	}

	

	
	

	return true;



  
    //alert(elementoPref);
    //alert("Hola Mundo");
}