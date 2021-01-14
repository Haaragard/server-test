const jwt = require("jsonwebtoken");

module.exports = () => {
	return (req, res, next) => {
		console.log("Authorization middleware");

		// Find JWT in Headers
		const token = req.headers["authorization"];
		if (!token) {
			return res.status(401).send("Access denied");
		} else {
			next();
		}
	};
};
