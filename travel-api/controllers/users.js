const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const Users = require("../models").User;

const Register = async (req, res) => {
	const {nama, email, password} = req.body;
	// cek apakah email sudah terdaftar 
	const user = await Users.findAll({
		where: { email }
	});

	if(user){
		res.json({
			message: "Email sudah terdaftar"
		})

		return;
	}

	// generate salt
	const salt = await bcrypt.genSalt();
	const hashPassword = await bcrypt.hash(password, salt);

	try {
		await Users.create({
			nama: nama,
			email: email,
			password: hashPassword,
		});

		res.status(200).json({
			success: true,
			message: "user berhasil di daftarkan"
		});

	} catch (err) {
		console.log(err)
	}
}

const Login = async (req, res) => {
	// cek user apakah sudah ada
	try {
		
	}
}

module.exports = {
	Register,
}

