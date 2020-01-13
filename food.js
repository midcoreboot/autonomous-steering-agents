class Food {
	constructor(x, y) {
		this.blob = createVector(x, y);
		this.foodValue = getRandomInt(10, 30);
		this.color = color(255,0,0);
		this.radius = 5;
	}
	update() {
	}
	show() {
		stroke(255);
		strokeWeight(1);
		fill(this.color);
		ellipse(this.blob.x, this.blob.y, this.radius * 2, this.radius * 2);
	}
}