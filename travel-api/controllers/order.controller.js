const Bus = require("../models").bus;
const Order_book = require("../models").order_book;
const jwt = require("jsonwebtoken");


const order = async (req, res) => {
	 try {
	  await Order_book.create(req.body);

	  res.status(200).json({
	  	success: true,
	  	message: "pesanan berhasil di buat"
	  });

	  return;

	 } catch (err) {
	 	res.status(400).json({
	 		success: false,
	 		message: "gagal membuat pesanan"
	 	})
	 }
}

const myOrders = (req, res) => {
	const token = req.cookies["auth-user"];

	try {
		jwt.verify(token, process.env.SECRET_TOKEN, async (err, decoded) => {

			if(err) return res.sendStatus(403);
			const data = await Order_book.findAll({
				where: { user_id: decoded.userId },
				attributes: ["tujuan", "jurusan", "jadwal"],
				include: {
					model: Bus,
					as: "bus",
					attributes: ["nama_bus", "tarif"],
				}
			});
			res.status(200).json(data);
			return;
		});

	} catch (err) {
		res.sendStatus(404);
		// console.log(err)
	}
}

module.exports = {
	order,
	myOrders
}