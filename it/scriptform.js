function validation() {
	let name = document.getElementById("name").value;
	let subject = document.getElementById("subject").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;
	let error_message = document.getElementById("error_message");
	let text;
	
	error_message.style.padding = "10px";  // because in your style you have padding 0px;
	
	if (name.length < 2) {
		text = 'Si prega di inserire il nome corretto';
		error_message.innerHTML = text;
		return false;
	}
	if (subject.length < 2){
		text = "Si prega di compilare l'oggetto";
		error_message.innerHTML = text;
		return false;
	}
	if (email.indexOf('@') == -1 || email.length < 6){
		text = "Si prega di compilare l'e - mail corretta";
		error_message.innerHTML = text;
		return false;
	}
	if (message.length <= 10){
		text = 'Si prega di digitare più di 10 lettere';
		error_message.innerHTML = text;
		return false;
	}
	alert('Il tuo messaggio è stato inviato con successo!')
	return true;
}