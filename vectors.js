class Velocity {
	constructor(x, y) {
		this.x = x;
		this.y = y
	}

	invertX() {
		this.x = -this.x;
	}

	invertY() {
		this.y = -this.y;
	}
}