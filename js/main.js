//EJEMPLO DE NOMBRES//

/*let name = prompt("Ingrese su nombre:")
let apellido = prompt("Ingrese su apellido:")
let edad = prompt("Ingrese su edad:")

alert("Bienvenid@" + name + " " + apellido + ", tu edad es " +edad  ) */

//EJEMPLO DE NÚMEROS//

/*let num = parseInt(prompt("Ingrese un numero"))

for(let i=0; i<=10; i++){
    console.log(num + i )
} */

function cargarDatos(){
	
	var nombre = prompt("Ingrese el nombre del comprador: ", "");
	var apellido = prompt("Ingrese el apellido del comprador: ", "");
	var modelo = prompt("Ingrese el modelo del auto: ", "");
	var cuenta1 = new Ventadeautos(nombre,apellido,modelo);
	cuenta1.mostrarDatos();
}
function validar(){

}

function Ventadeautos (nombre,apellido,modelo) {
	//alert("hola");
	this.nombreTitular = nombre;

	this.apellidosTitular = apellido;

	this.modelo = modelo;

	this.mostrarDatos = function () {
		var msg = 'Ha comprado un auto: ';

	    msg = msg + 'Los datos del comprador son: Nombre: ' + this.nombreTitular;

	    msg = msg + '; Apellidos: ' + this.apellidosTitular + '; Modelo: ' + this.modelo;

	    alert(msg);

	};
}