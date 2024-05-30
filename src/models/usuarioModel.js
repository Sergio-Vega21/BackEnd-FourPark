const pool = require('../config/database');

module.exports = {
    async create(usuario) {
        const { correo_electronico, id_rol, nombre, apellido, contrasena} = usuario;
        const result = await pool.query(
            'INSERT INTO usuario ( correo_electronico, id_rol, nombre, apellido, contrasena) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [ correo_electronico, id_rol, nombre, apellido, contrasena]
        );
        return result.rows[0];
    },

    async findAll() {
        const result = await pool.query('SELECT * FROM usuario');
        return result.rows;
    },

    async findById(id) {
        const result = await pool.query('SELECT * FROM usuario WHERE correo_electronico = $1', [id]);
        return result.rows[0];
    },

    async update(id, usuario) {
        const { id_rol, nombre, apellido, contrasena} = usuario;
        const result = await pool.query(
            'UPDATE usuario SET id_rol = $2, nombre= $3, apellido = $4, contrasena = $5  WHERE correo_electronico= $1 RETURNING *',
            [id, id_rol, nombre, apellido, contrasena]
        );
        return result.rows[0];
    },

    async delete(id) {
        const result = await pool.query('DELETE FROM usuario WHERE correo_electronico  = $1 RETURNING *', [id]);
        return result.rows[0];
    }
};
