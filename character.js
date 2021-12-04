// PROBANDO PERSONAJE
class Character {
	constructor() {
		this.x = 50;
		this.y = 300;
		this.size = 30;

		this.movY = 0;
		this.weight = 1;
	}
	update() {
		//Validamos que no llegue a tocar el piso del canvas
		if (this.y > canvas.height - this.size * 2) {
			//dejamos un espacio entre el piso y el personaje igual a su tamano
			this.y = canvas.height - this.size * 2;
			//reseteamos movY para que no siga cambiando las coordenadas una
			//vez que toco el piso

			this.movY = 0;
		} else {
			// A cada cuadro aumenta la aceleracion en eje Y
			this.movY += this.weight;
			// Frenamos un poco la caida
			this.movY *= 0.9;
			// Le sumamos la aceleracion a la coord Y
			this.y += this.movY;
		}
		//Validamos que no llegue a tocar el techo del canvas
		if (this.y < this.size) {
			this.y = this.size;
			this.movY = 0;
		}
		// Si apretamos la tecla Space llamamos al metodo up
		if (space) this.up();
	}
	draw() {
		// ctx.fillStyle = 'blue';
		// ctx.fillRect(this.x, this.y, this.size, this.size);
		ctx.drawImage(plane, this.x, this.y, this.size, this.size);
	}

	// metodo que hace subir el personaje en el eje y
	up() {
		this.movY -= 1.8;
	}
}

const character = new Character();
