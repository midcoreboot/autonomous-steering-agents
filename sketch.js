let blob = [];
let food = []
let r = 10;
let rFood = 10;

function setup() {
	createCanvas(400, 400);
	for(var i = 0; i < 2; i++) {
	let x = getRandomInt(0, 400) - r;
	let y = getRandomInt(0, 400) - r;
	let xFood = getRandomInt(0, 400) - r;
	let yFood = getRandomInt(0, 400) - r;
	blob[i] = new Blob(x, y);
	food[i] = new Food(xFood, yFood);
	}
}

function draw() {
	background(200);

	//BLOB LOOP
	for(let i = 0; i < blob.length; i++) {
		//Check if blob intersect with any other blob
		for(let j = 0; j < blob.length; j++) {
			if(j != i ){
				if(blob[i].intersect(blob[j]) == true) {
					//console.log("true");
				}

			}
		}
		//check if blob can see any wall
		switch(blob[i].seesWall()){
			case "top":
			//console.log("Blob [" + i + "] sees topWall");
			break;
			case "right":
			//console.log("Blob [" + i + "] sees rightWall");
			break;
			case "bottom":
			//console.log("Blob [" + i + "] sees bottomWall");
			break;
			case "left":
			//console.log("Blob [" + i + "] sees leftWall");
			break;
		}
		//check if blob intersects with any food
		for(let u = 0; u < food.length; u++ ){
			if(blob[i].intersect(food[u]) == true)
			{
				food.splice(u, 1);
			}
		}
		blob[i].update();
		blob[i].show();
	}
	for(let i = 0; i < food.length; i++) {
		food[i].show();
	}
	let foodPercent  = getRandomInt(0, 100);
	if(foodPercent >= 99) {
	let xFood = getRandomInt(0, 400) - r;
	let yFood = getRandomInt(0, 400) - r;
	food[food.length] = new Food(xFood, yFood);

	}
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
//https://www.youtube.com/watch?v=4zhJlkGQTvU