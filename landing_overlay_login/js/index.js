/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/

	window.addEventListener('click', function(e){
	
	if (document.getElementById('ye').contains(e.target)){
  	
  } else{
  	ocultar_login_sign_up();
  }
})
	//ocultar_login_sign_up();
	//}

//onclick="ocultar_login_sign_up()"

function cambiar_login() {
	
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  
  }
  
 function cambiar_login1() {
	if ((document.getElementById('username').value == "1" && document.getElementById('password').value =="1")) window.location.replace('https://www.google.co.in') ; else alert("invalid") ; 
  }

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  


}    



function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }