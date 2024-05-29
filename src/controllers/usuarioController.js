const Usuario = require('../models/usuarioModel');

exports.createUsuario= async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUsuarios= async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUsuario = async (req, res) => {
    try {            
        const usuario = await Usuario.findById(req.query.id);
        if (!usuario) {
            return res.status(404).json({ message: 'usuario not found' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.update(req.query.id, req.body);
        if (!usuario) {
            return res.status(404).json({ message: 'usuario not found' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.delete(req.query.id);
        if (!usuario) {
            return res.status(404).json({ message: 'usuario not found' });
        }
        res.status(200).json({ message: 'usuario deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
