const verifySignUpController = require('../api').verifySignUp;
const verifySignController = require('../api').verifySign;
const statusController = require('../api').status;
const verifyJwtTokenController = require('../api').verifyJwtToken;

module.exports = function (app) {

	//User Auth
	app.post('/api/auth/signup',
		[verifySignUpController.checkDuplicateUserNameOrEmail,
			verifySignUpController.checkRolesExisted
		],
		(req, res) => verifySignController.signup);

	app.post('/api/auth/signin', (req, res) => verifySignController.signin);

	//Status
	app.get('/api/status',
		(req, res) => statusController.list);
	app.get('/api/statususer',
		[verifyJwtTokenController.verifyToken],
		(req, res) => statusController.listStatusUser);
	app.get('/api/status/:id',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		],
		(req, res) => statusController.getById);
	app.post('/api/status',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		],
		(req, res) => statusController.add);
	app.put('/api/status/:id',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		],
		(req, res) => statusController.update);
	app.delete('/api/status/:id',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		],
		(req, res) => statusController.delete);
}