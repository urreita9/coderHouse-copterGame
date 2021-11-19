// ACCEDEMOS AL NODO Y SUS PROPIEDADES/METODOS mediante getContext() en 2d
const canvas = document.getElementById('copter');
const ctx = canvas.getContext('2d');

// EL CANVAS OCUPARA TODA LA PANTALLA (en etapa de desarrollo)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// POR EL MOMENTO ESCUCHAREMOS AL EVENTO CLICK
// Y GUARDAREMOS SUS COORDENADAS EN UN OBJETO

const click = {
	x: null,
	y: null,
};

document.addEventListener('click', (event) => {
	click.x = event.x;
	click.y = event.y;

	//Con cada click agregamos 10 burbujas a smokeTrail
	for (let i = 0; i < 10; i++) {
		smokeTrail.push(new Bubble());
	}
});

// Array vacio para almacenar las burbujas

const smokeTrail = [];

// CLASE BUBBLE, NOS DARA LUGAR PARA INSTANCIAR LAS BURBUJAS DEL
// RASTRO DE HUMO

class Bubble {
	constructor() {
		// coordenadas iniciales
		this.x = click.x;
		this.y = click.y;
		// tamano random
		this.size = Math.random() * 5 + 1;
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
	// recorremos el arreglo que rellenamos con el click
	for (let i = 0; i < smokeTrail.length; i++) {
		//actualizamos y dibujamos cada burbuja
		smokeTrail[i].update();
		smokeTrail[i].draw();
	}
	// RECORDATORIO: ELIMINAR BURBUJAS Y VACIAR ARRAY
};

// funcion importantisima. limpia el canvas, ejecuta la actualizacion/dibujo y finalmente se vuelve a llamar una y otra vez mediante requestAnimationFrame.
const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	handleSmoke();

	requestAnimationFrame(animate);
};
animate();
