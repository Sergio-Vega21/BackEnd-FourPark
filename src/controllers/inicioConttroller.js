
const Inicio = require('../models/inicioModel');

    exports.createUser = async (req, res) => {
        try {
            const { correo, contraseña } = req.body;

            // Validar los datos del formulario
            if (!correo || !contraseña) {
                return res.status(400).json({ message: 'Todos los campos son obligatorios' });
            }
            // Verificar si el usuario ya existe
            const existingUser = await Inicio.findOne({ correo });
            if (existingUser) {
                return res.status(400).json({ message: 'Este correo electronico ya esta registrado' });
            }
            // Crear un nuevo usuario
            const newUser= await Inicio.createUser(req.body)
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    exports.getUsers= async (req, res) =>{
        try {
            const users = await Inicio.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    exports.getUser = async (req, res) =>{
        try {
            const user = await Inicio.findOne(req.query.correo);
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    exports.updateUser =async(req, res) =>{
        try {
            const user = await Inicio.update(req.query.correo, req.body, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    exports.deleteUser= async (req, res)=> {
        try {
            const user = await Inicio.deleteUser(req.query.correo);
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json({ message: 'Usuario eliminado' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };


module.exports = UserController;
