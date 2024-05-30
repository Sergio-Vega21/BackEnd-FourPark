const SHA1 = require('crypto-js/sha1');
const Login = require('../models/loginModel');

exports.loginCliente = async (req, res) => {
    try {
        const { correo_electronico, contrasena } = req.body;

        // Buscar el usuario en la base de datos usando el correo electrónico
        const usuario = await Login.findByCorreo(correo_electronico);
        if (!usuario) {
            return res.status(404).json({ message: 'Este usuario no existe' });
        }

        // Comparar la contraseña proporcionada (hashed) con la almacenada
        if (contrasena !== usuario.contrasena) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        const rol = await Login.findrol(correo_electronico);

        if (rol =='1'){
            res.status(200).json({ message: 'Sesion Iniciada como gerente' });
        }

        // Si las contraseñas coinciden, iniciar sesión
        res.status(200).json({ message: 'Sesion Iniciada como cliente' });
    } catch (error) {


        res.status(400).json({ error: error.message });
    }
};
