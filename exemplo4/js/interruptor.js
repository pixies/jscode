function ligar(){

	var lampada = document.getElementById("lampada");

	if(lampada.className == 'lampada-off') {
		lampada.className='lampada-on';	
	}

}

function desligar(){

	var lampada = document.getElementById("lampada");

	if(lampada.className == 'lampada-on') {
		lampada.className='lampada-off';	
	}

}

function interruptor(){

	var lampada = document.getElementById("lampada");
		if(lampada.className == 'lampada-off') {
			ligar();
		}
		else if(lampada.className == 'lampada-on') {
			desligar();
		}
}

