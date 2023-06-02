const Bus_by_jurusan = require("../models").bus_by_jurusan;
const Bus = require("../models").bus;
const Jurusan = require("../models").jurusan;
// const { Op } =require("sequelize");


const getAllBuses = async (req, res) => {
	const buses = await Bus.findAll();
	res.json(buses)
}

const getBusByBusId = async (req, res) => {
	const { busId } = req.params;

	const bus = await Bus.findOne({
		where: { bus_id: busId },
	}) 

	const getJurusan = await Bus_by_jurusan.findAll({
		attributes: { exclude: ["bus_id", "jurusan_id"] },
		where: { bus_id: busId },
		include: {
			model: Jurusan,
			attributes: ["nama"],
		}
	})

	const jurusan = getJurusan.map(data => data.jurusan["nama"] )

	res.json({
		bus,
		jurusan
	})
}


module.exports = {
	getAllBuses,
	getBusByBusId,
}
