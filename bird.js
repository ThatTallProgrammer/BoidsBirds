class Bird {
	constructor(pos, vel, id) {
		this.pos = pos;
		this.id = id;
		this.vel = vel;
	}

	changeDirectionTo(p) {
		const distUnitVector = this.pos.getDistanceVector(p).getUnitVector();
		const speed = this.vel.getMagnitude();

		this.vel = distUnitVector;
		this.vel.scale(speed);
	}
}
