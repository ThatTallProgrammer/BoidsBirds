class Vector {
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

	getMagnitude() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	getUnitVector() {
		const mag = this.getMagnitude();
		return new Vector(this.x / mag, this.y / mag);
	}

	scale(scaler) {
		this.x *= scaler;
		this.y *= scaler;
	}
}