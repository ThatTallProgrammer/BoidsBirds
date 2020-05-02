class Bird {
	constructor(pos, vel, id) {
		this.pos = pos;
		this.id = id;
		this.vel = vel;
	}

	distanceTo(bird) {
		return Math.sqrt(
			(bird.pos.x - this.pos.x) ** 2 +
			(bird.pos.y - this.pos.y) ** 2
		);
	}

	distanceDerivative(bird) {
		const distance = this.distanceTo(bird);
		const d_x = (this.pos.x - bird.pos.x) / distance;
		const d_y = (this.pos.y - bird.pos.y) / distance;

		return {
			'derivativeOfX': d_x,
			'derivativeOfY': d_y  
		};
	}
}
