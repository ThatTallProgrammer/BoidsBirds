const birds = [];
const population = 100;

const leftBound = 10;
const rightBound = 510;
const upperBound = 10;
const lowerBound = 510;

const timeInterval = 1000 // milliseconds

var windowHasFocus = true; 

var popCenter = new Position(
	(rightBound + leftBound) / 2,
	(lowerBound + upperBound) / 2
);

var getAvgDistanceInfo = function() {
	distanceInfo = {
		'derivativeOfX': 0,
		'derivativeOfY': 0,
		'distance': 0
	};

	birds.map(bird => popCenter.getDistanceInfo(bird.pos))
		.forEach(d => {
			distanceInfo.derivativeOfX += d.derivativeOfX;
			distanceInfo.derivativeOfY += d.derivativeOfY;
			distanceInfo.distance += d.distance;
		});

	Object.keys(distanceInfo).map(k => distanceInfo[k] /= population);
	
	return distanceInfo;
}

var updatePopCenter = function() {
	distanceInfo = getAvgDistanceInfo();
	for(var i = 0; i < 10; i++) {
		popCenter.x -= distanceInfo.derivativeOfX * distanceInfo.distance; 
		popCenter.y -= distanceInfo.derivativeOfY * distanceInfo.distance;
		distanceInfo = getAvgDistanceInfo(); 
	}

	anime({
		targets: `.pop-center`,
		translateX: popCenter.x,
		translateY: popCenter.y,
		borderRadius: 50, 
		duration: 10,
		easing: 'linear',
	});	
}

var randInt = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var moveBirds = function() {

	if(windowHasFocus){

		updatePopCenter();

		birds.forEach(bird => {
			bird.changeDirectionTo(popCenter);

			// if(bird.pos.x < leftBound || bird.pos.x > rightBound) bird.vel.invertX();
			// if(bird.pos.y < upperBound || bird.pos.y > lowerBound) bird.vel.invertY();

			bird.pos.x += (timeInterval / 1000) * bird.vel.x;
			bird.pos.y += (timeInterval / 1000) * bird.vel.y;

			anime({
				targets: `.bird-${bird.id}`,
				translateX: bird.pos.x,
				translateY: bird.pos.y,
				borderRadius: 50, 
				duration: timeInterval,
				easing: 'linear',
			});	
		}); 
	}	

	setTimeout(moveBirds, timeInterval);
}

for(var id = 0; id < population; id++) {
	let x_pos = randInt(leftBound, rightBound);
	let y_pos = randInt(upperBound, lowerBound);
	let x_vel = randInt(-100, 100);
	let y_vel = randInt(-100, 100);
	
	birds.push(new Bird(
		new Position(x_pos, y_pos),
		new Vector(x_vel, y_vel),
		id
	));
}

birds.forEach( bird => {
	document.getElementById('sky').innerHTML += `<div class='bird-${bird.id} overlapping dot'></div>`;

	anime({
		targets: `.bird-${bird.id}`,
		translateX: [0, bird.pos.x],
		translateY: [0, bird.pos.y],
		borderRadius: 50, 
		duration: 0,
		easing: 'linear', 
	});
});

document.getElementById('sky').innerHTML += `<div class='pop-center overlapping'>x</div>`;

window.onblur = function() {
	windowHasFocus = false;
}
window.onfocus = function() {
	windowHasFocus = true;
}

moveBirds();
