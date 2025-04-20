const express = require('express');
const router = express.Router();

const userRoutes = require('./users'); // importamos rutas del usuario

// /api/users/...
router.use('/users', userRoutes);

module.exports = router;
