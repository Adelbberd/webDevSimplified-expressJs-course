const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('User list');
});

// Get information from dynamic URL data e.g(:userId).
// use req.params.
router.route('/:userId').get((req, res) => {
	res.send(`Get user with ID ${req.params.userId}`);
});

router.param('userId', (req, res, next, userId) => {
	console.log(userId);
	next();
});

module.exports = router;
