const express = require('express');

const router = express.Router;

const usersService = require('./../services/userService')

router.get('/', (req, res) => {
    const users = service.find();
    res.json(users);
});

router.get('/:usuarioId', (req, res) => {
    const { id } = req.params;
    const user = service.findOne(id);
    res.json(users);
});

module.exports = router;