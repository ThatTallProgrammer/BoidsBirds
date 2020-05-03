class Position {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	distanceTo(p) {
		return Math.sqrt(
			(p.x - this.x) ** 2 +
			(p.y - this.y) ** 2
		);
	}

	getDistanceInfo(p) {
		const distance = this.distanceTo(p);
		const d_x = (this.x - p.x) / distance;
		const d_y = (this.y - p.y) / distance;

		return {
			'derivativeOfX': d_x,
			'derivativeOfY': d_y,
			'distance': distance 
		};
	}

	getDistanceVector(p) {
		return new Vector(p.x - this.x, p.y - this.y);
	}
}
