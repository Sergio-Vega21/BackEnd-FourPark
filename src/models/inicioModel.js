const pool = require("../config/database");

module.exports = {
  async createUser(Usuario) {
    try {
      const { correo, nombre, apellido, contrasena, id_rol } = Usuario;
      console.log(await pool.query("select * from rol"));
      console.log(id_rol);
      const result = await pool.query(
        `INSERT INTO USUARIO ("correo_electronico", "id_rol", "nombre", "apellido", "contrasena") VALUES ('${correo}', ${id_rol}, '${nombre}', '${apellido}', '${contrasena}') RETURNING *`,
        []
      );

      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  },

  async findAll() {
    const result = await pool.query("SELECT * FROM usuario");
    return result.rows;
  },

  async findOne(correo) {
    try {
      const result = await pool.query(
        "SELECT * FROM Usuario WHERE correo_electronico = $1",
        [correo]
      );
      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  },
  async update(correo, Usuario) {
    const { Correo, ID_ROL, NOMBRE, APELLIDO, CONTRASENA } = Usuario;
    const result = await pool.query(
      "UPDATE Usuario SET correo_electronico = $1, id_rol = $2, nombre = $4, Apellido = $5, contrasena = $6 WHERE correo_electronico = $3 RETURNING *",
      [Correo, ID_ROL, NOMBRE, APELLIDO, CONTRASENA]
    );
    return result.rows[0];
  },

  async deleteUser(correo) {
    const result = await pool.query(
      "DELETE FROM Usuario WHERE correo_electronico = $1 RETURNING *",
      [correo]
    );
    return result.rows[0];
  },
};
