const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if(token == null) return res.sendStatus(401); // unauthorized
	// jika ada tokennya maka di verifikasi terlebh dahulu
	jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
		if(err) return res.sendStatus(403); //forbidden
		req.email = decoded.email;
		next()
	})
}

module.exports = {
	verifyToken,
}