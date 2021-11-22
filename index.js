// ACCEDEMOS AL NODO Y SUS PROPIEDADES/METODOS mediante getContext() en 2d
const canvas = document.getElementById('copter');
const ctx = canvas.getContext('2d');

// EL CANVAS OCUPARA TODA LA PANTALLA (en etapa de desarrollo)
canvas.width = 600;
canvas.height = 400;

// POR EL MOMENTO ESCUCHAREMOS AL EVENTO CLICK
// Y GUARDAREMOS SUS COORDENADAS EN UN OBJETO

// const click = {
// 	x: null,
// 	y: null,
// };

// Guardamos como boolean si la tecla space esta siendo presionada o no
let space = false;

// Necesitamos una variable que nos sirva para establecer un intervalo
// para la aparicion de los obstaculos

let interval = 0;

let difficult = 2;

// document.addEventListener('click', (event) => {
// 	click.x = event.x;
// 	click.y = event.y;

// 	//Con cada click agregamos 10 burbujas al array smokeTrail
// 	for (let i = 0; i < 10; i++) {
// 		smokeTrail.push(new Bubble());
// 	}
// });

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
// funcion importantisima. Limpia el canvas mediante clearRect(coord x inicial, coord y inicial, hasta donde en x, hasta donde en y), ejecuta
// la actualizacion/dibujo y finalmente se vuelve a llamar una y otra vez mediante requestAnimationFrame.
const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	character.update();
	character.draw();
	handleSmoke();
	interval++;

	handleRectangles();
	requestAnimationFrame(animate);
};
animate();
