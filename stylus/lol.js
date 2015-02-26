window.onload = function(){
	
	var p = prompt("Please enter your name");
	var id = prompt("Please enter your id");	
	alert(p+" -  "+id);
	var persona1 = new Person(p,id);
	var x = persona1.id;
	alert(x);
	


}

function Person(name,id){
			
  this.name = name;
  this.id = id;
  alert('Una instancia de Persona'+this.name);

}