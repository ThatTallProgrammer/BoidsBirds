const birds = [];
const amount = 1;

const leftBound = 10;
const rightBound = 510;
const upperBound = 10;
const lowerBound = 510;

const timeInterval = 100 // milliseconds

var randInt = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var moveBirds = function() {
	birds.forEach(bird => {
		bird.pos.x = bird.pos.x + (timeInterval / 1000) * bird.vel.x;
		bird.pos.y = bird.pos.y + (timeInterval / 1000) * bird.vel.y;

		anime({
			targets: `.bird-${bird.id}`,
			translateX: bird.pos.x,
			translateY: bird.pos.y,
			borderRadius: 50, 
			duration: timeInterval,
			easing: 'linear',
		});	
	}); 

	setTimeout(moveBirds, timeInterval);
}

for(var id = 0; id < amount; id++) {
	let x_pos = randInt(leftBound, rightBound);
	let y_pos = randInt(upperBound, lowerBound);
	let x_vel = randInt(-100, 100);
	let y_vel = randInt(-100, 100);
	
	birds.push(new Bird(
		new Position(x_pos, y_pos),
		new Velocity(x_vel, y_vel),
		id
	));
}

birds.forEach( bird => {
	document.getElementById('sky').innerHTML += `<p class='bird-${bird.id}'>${bird.id}</p>`;

	anime({
		targets: `.bird-${bird.id}`,
		translateX: [0, bird.pos.x],
		translateY: [0, bird.pos.y],
		borderRadius: 50, 
		duration: 0,
		easing: 'linear', 
	});

	// console.log(`Position - X: ${bird.pos.x} Y: ${bird.pos.y}`);
});

moveBirds();
