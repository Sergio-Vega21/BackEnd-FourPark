const pool = require('../config/database');


module.exports = {
    async createUser(Usuario) {
        const { CORREO_ELECTRONICO, ID_ROL, NOMBRE, APELLIDO, CONTRASENA } = Usuario;
        const result = await pool.query(
            'INSERT INTO USUARIO ("CORREO_ELECTRONICO", "ID_ROL", "NOMBRE", "APELLIDO", "CONTRASENA") VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [CORREO_ELECTRONICO, ID_ROL, NOMBRE, APELLIDO, CONTRASENA]
        );
        return result.rows[0];
    },

    async findAll() {
        const result = await pool.query('SELECT * FROM ususario');
        return result.rows;
    },

    async findOne(correo) {
        const result = await pool.query('SELECT * FROM Usuario WHERE correo_electronico = $1', [correo]);
        return result.rows[0];
    },
   

    async update(Correo, Usuario ) {
        const {Correo, ID_ROL, NOMBRE, APELLIDO, CONTRASENA} = Usuario;
        const result = await pool.query(
            'UPDATE Usuario SET correo_electronico = $1, id_rol = $2, nombre = $4, Apellido = $5, contrasena = $6 WHERE correo_electronico = $3 RETURNING *',
            [Correo, ID_ROL, NOMBRE, APELLIDO, CONTRASENA]
        );
        return result.rows[0];
    },

    async deleteUser(correo) {
        const result = await pool.query('DELETE FROM Usuario WHERE correo_electronico = $1 RETURNING *', [correo]);
        return result.rows[0];
    }
};
