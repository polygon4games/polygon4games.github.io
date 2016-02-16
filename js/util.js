// onload listener
window.onload = onload;
document.addEventListener("DOMContentLoaded", onload);

function onload(){
  lastModified();
}

function lastModified(){
	var date = new Date(document.lastModified);
	document.getElementById('lastModified').innerHTML = date.toGMTString();
}


function sendMail(){

	// var recipient="polygon4games";
	// var at = String.fromCharCode(64);
	// var dotcom="gmail.com";
	// var mail="mailto:";
	// window.open(mail+recipient+at+dotcom);

}