const birds = [];
const amount = 100;

var randInt = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(var id = 0; id < amount; id++) {
	let x_pos = randInt(1, 1000);
	let y_pos = randInt(1, 1000);
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
		translateX: bird.pos.x,
		translateY: bird.pos.y,
		borderRadius: 50, 
		duration: 0,
		easing: 'linear', 
	});

	// console.log(`Velocity - X: ${bird.vel.x} Y: ${bird.vel.y}`);
});

t = 5;
birds.forEach(bird => {
	anime({
		targets: `.bird-${bird.id}`,
		translateX: bird.pos.x + t * bird.vel.x,
		translateY: bird.pos.y + t * bird.vel.y,
		borderRadius: 50, 
		duration: 1000 * t,
		easing: 'linear',
	});	
}); 
