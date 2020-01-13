class Blob {
	constructor(x, y) {
		this.blob = createVector(x, y);
		this.xdir = 0;
		this.ydir = 0;
		this.radius = 10;
		this.vision = 20;
		this.food = 100;
		this.life = 100;
		this.maxspeed;
		this.maxforce;
	}
	intersect(other) {
		var d = dist(this.blob.x, this.blob.y, other.blob.x, other.blob.y);
		if(d < this.radius + other.radius) {
			return true;
		} else {
			return false;
		}
	}
	seesEnt(other) {
		var d = dist(this.blob.x, this.blob.y, other.blob.x, other.blob.y);
		if (d < this.vision + other.radius) {
			return true
		} else {
			return false;
		}
	}

	seesWall() {
		var dL = dist(this.blob.x, this.blob.y, 0, this.blob.y);
		var dT = dist(this.blob.x, this.blob.y, this.blob.x, 0);
		var dR = dist(this.blob.x, this.blob.y, 400, this.blob.y);
		var dB = dist(this.blob.x, this.blob.y, this.blob.x, 400);
		if(dL < this.vision) {
			return "left";
		} else if(dT < this.vision) {
			return "top";
		} else if(dR < this.vision) {
			return "right";
		} else if(dB < this.vision) {
			return "bottom";
		}
	}

	update() {
		this.xdir = random(-1, 1);
		this.ydir = random(-1, 1);
		this.blob.x += this.xdir;
		this.blob.y += this.ydir;
	}
	show() {
		fill(0);
		stroke(255,100,0);
		strokeWeight(1);
		ellipse(this.blob.x, this.blob.y, this.radius * 2, this.radius * 2);
		fill('rgba(0,255,0, 0.1)');
		strokeWeight(0);
		ellipse(this.blob.x, this.blob.y, this.vision * 2, this.vision * 2);
	}
}