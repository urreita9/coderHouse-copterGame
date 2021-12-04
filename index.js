// ACCEDEMOS AL NODO Y SUS PROPIEDADES/METODOS mediante getContext() en 2d
const canvas = document.getElementById('copter');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('play');
// EL CANVAS OCUPARA TODA LA PANTALLA (en etapa de desarrollo)
canvas.width = 600;
canvas.height = 400;

// POR EL MOMENTO ESCUCHAREMOS AL EVENTO CLICK
// Y GUARDAREMOS SUS COORDENADAS EN UN OBJETO

// const click = {
// 	x: null,
// 	y: null,
// };

//GAMESTATE (to be changed)
// let play = false;
// canvas.addEventListener('click', () => handleState());
// let gameState = {
// 	current: 0,
// 	ready: 0,
// 	gameOver: 1,
// };
// const handleState = () => {
// 	if (gameState.current === gameState.ready) {
// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
// 		play = true;
// 		animate();
// 	}
// 	// if (gameState.current === gameState.gameOver) {
// 	// 	// ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	// 	gameState.current = gameState.ready;
// 	// }
// };

// Guardamos como boolean si la tecla space esta siendo presionada o no
let space = false;
document.addEventListener('keydown', (event) => {
	if (event.code === 'Space') {
		space = true;
	}
});

document.addEventListener('keyup', (event) => {
	if (event.code === 'Space') {
		space = false;
	}
});

// Necesitamos una variable que nos sirva para establecer un intervalo
// para la aparicion de los obstaculos

let interval = 0;

let difficult = 2;
const collision = new Image();
collision.src = './images/collision1.png';

const plane = new Image();
plane.src = './images/plane.png';
// document.addEventListener('click', (event) => {
// 	click.x = event.x;
// 	click.y = event.y;

// 	//Con cada click agregamos 10 burbujas al array smokeTrail
// 	for (let i = 0; i < 10; i++) {
// 		smokeTrail.push(new Bubble());
// 	}
// });

const handleCollision = () => {
	for (let i = 0; i < rectanglesArray.length; i++) {
		if (
			(character.x + character.size > rectanglesArray[i].x &&
				character.x < rectanglesArray[i].x + rectanglesArray[i].width &&
				character.y < rectanglesArray[i].y + rectanglesArray[i].height &&
				character.y + character.size > rectanglesArray[i].y) ||
			(character.x + character.size > rectanglesArray[i].x &&
				character.x < rectanglesArray[i].x + rectanglesArray[i].width &&
				character.y < rectanglesArray[i].bottom + rectanglesArray[i].height &&
				character.y + character.size > rectanglesArray[i].bottom)
		) {
			ctx.drawImage(collision, character.x + 10, character.y - 10, 40, 40);
			return true;
		}
		// COLLISION BOTTOM
	}
};
// funcion importantisima. Limpia el canvas mediante clearRect(coord x inicial, coord y inicial, hasta donde en x, hasta donde en y), ejecuta
// la actualizacion/dibujo y finalmente se vuelve a llamar una y otra vez mediante requestAnimationFrame.
const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (play) {
		handleRectangles();

		character.update();
		character.draw();
		handleSmoke();
		handleCollision();
		if (handleCollision()) {
			interval = 0;
			// gameState.current = gameState.gameOver;
			console.log(gameState);
			play = false;
			return;
		}

		interval++;
	}
	requestAnimationFrame(animate);
};
animate();
