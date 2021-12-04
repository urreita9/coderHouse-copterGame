// Array vacio para almacenar las burbujas

const smokeTrail = [];

// CLASE BUBBLE, NOS DARA LUGAR PARA INSTANCIAR LAS BURBUJAS DE smokeTrail CON EL EVENTO CLICK

class Bubble {
	constructor() {
		// coordenadas iniciales. Las mismas seran las del personaje.
		// coord x le restamos 3 px para dejar un espacio entre el humo y el personaje
		this.x = character.x - 3;
		//coord y le sumamos la mitad del lado del personaje para que el humo salga del centro del mismo
		this.y = character.y + character.size / 2;
		// tamano random
		this.size = Math.random() * 3 + 1;
		// movimiento x negativo
		this.movX = Math.random() * 3 * -1;
		// movimiento y random
		this.movY = Math.random() * 3 - 1.5;
	}
	// metodo para actualizar el movimiento y la posicion
	update() {
		//decrementamos x sumando el numero negativo de movX
		this.x += this.movX;
		// modificamos y
		this.y += this.movY;
		// vamos achicando las burbujas a medida que se desplazan
		if (this.size > 0.3) this.size -= 0.1;
	}
	// metodo para dibujar
	draw() {
		// Asi se dibuja un cirulo en canvas
		// por el momento las burbujas seran rojas
		ctx.fillStyle = 'red';
		//Declaramos el principio del trazo
		ctx.beginPath();
		// generamos un circulo arc(coord x, coord y, radio, eje principio de trazo, circunferencia)
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		// rellenamos el circulo de rojo
		ctx.fill();
	}
}

// funcion para manejar las actualizaciones y el dibujo del humo
const handleSmoke = () => {
	//agregamos burbujas al array smokeTrail
	smokeTrail.unshift(new Bubble());
	// recorremos el array
	for (let i = 0; i < smokeTrail.length; i++) {
		//actualizamos y dibujamos cada burbuja
		smokeTrail[i].update();
		smokeTrail[i].draw();
	}
	// NO DEJAMOS QUE EL ARRAY TENGA MAS DE 100 ELEMENTOS. CUANDO LO HACE, LE SACAMOS 20.
	if (smokeTrail.length > 100) {
		for (let i = 0; i < 20; i++) {
			smokeTrail.pop(smokeTrail[i]);
		}
	}
};
