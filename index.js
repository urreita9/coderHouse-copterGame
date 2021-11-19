let edad = parseInt(prompt('Ingrese su edad'));

function mayor(edad) {
	if (edad >= 18) {
		return `${edad}, mayor de edad`;
	}
	return `${edad}, menor de edad`;
}
document.getElementById('titleSpan').textContent = mayor(edad);
