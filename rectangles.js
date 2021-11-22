const rectanglesArray = [];

class Rectangles {
	constructor() {
		this.x = canvas.width;
		this.maxY = -150;
		this.y = this.maxY * (Math.random() + 1);
		this.height = 350;
		this.hole = 125;
		this.width = 84;
		this.bottom = this.y + this.height + this.hole;
	}

	update() {
		this.x -= 2;
		// COLISSION TOP
		if (
			character.x + character.size > this.x &&
			character.x < this.x + this.width &&
			character.y < this.y + this.height &&
			character.y + character.size > this.y
		) {
			console.log('collision top');
		}
		// COLLISION BOTTOM
		if (
			character.x + character.size > this.x &&
			character.x < this.x + this.width &&
			character.y < this.bottom + this.height &&
			character.y + character.size > this.bottom
		) {
			console.log('collision bottom');
		}
		this.draw();
	}
	draw() {
		ctx.fillStyle = 'yellow';
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.fillRect(this.x, this.bottom, this.width, this.height);
	}
}

const handleRectangles = () => {
	if (interval % 75 === 0) {
		rectanglesArray.unshift(new Rectangles());
	}
	if (interval % 1000 === 0) {
		difficult++;
	}
	for (let i = 0; i < rectanglesArray.length; i++) {
		rectanglesArray[i].update();
	}
	if (rectanglesArray.length > 50) {
		for (let i = 0; i < 20; i++) {
			rectanglesArray.pop(rectanglesArray[i]);
		}
	}
};
