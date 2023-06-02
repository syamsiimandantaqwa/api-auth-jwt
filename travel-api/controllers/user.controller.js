const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const Users = require("../models").User;

const Register = async (req, res) => {
	const {nama, email, password} = req.body;
	// cek apakah email sudah terdaftar 
	const user = await Users.findAll({
		where: { email: email }
	});

	if(user[0]){
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
		const user = await Users.findOne({
			where: {
				email: req.body.email
			}
		});	

		// cek passwordnya
			const match = await bcrypt.compare(req.body.password, user.password);
			if(!match) return res.status(400).json({ message: "password tidak cocok" })

			const userId = user.user_id;
			const nama = user.nama;
			const email = user.email;

			const accessToken = jwt.sign({userId, nama, email}, process.env.SECRET_TOKEN, {
				expiresIn: "1d"
			})

			res.cookie("auth-user", accessToken, {
				secure: true,
				httpOnly: true,
				maxAge: 1000 * 60 * 60 * 24
			});

			res.status(200).json({
				success: true,
				accessToken,
				message: "user berhasil login"
			})

	}catch (err) {
		res.status(404).json({
			success: false,
			accessToken: null,
			message: "email tidak di temukan"
		})

		console.log(err)
	}
}

module.exports = {
	Register,
	Login
}

