const { v4 } = require("uuid");
const pool = require("../config/database");
const cypher = require("crypto-js/md5");

// Métodos existentes

module.exports = {
  async create(usuario) {
    const { correo_electronico, id_rol, nombre, apellido } = usuario;
    const contrasena = v4();

    console.log(contrasena);
    const result = await pool.query(
      "INSERT INTO usuario ( correo_electronico, id_rol, nombre, apellido, contrasena) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [correo_electronico, id_rol, nombre, apellido, contrasena]
    );
    return result.rows[0];
  },

  async findAll() {
    const result = await pool.query("SELECT * FROM usuario");
    return result.rows;
  },

  async findById(usuario) {
    const { correo_electronico } = usuario;
    const result = await pool.query(
      "SELECT * FROM usuario WHERE correo_electronico = $1",
      [correo_electronico]
    );
    return result.rows[0];
  },

  async update(id, usuario) {
    const { id_rol, nombre, apellido, contrasena } = usuario;
    const result = await pool.query(
      "UPDATE usuario SET id_rol = $2, nombre= $3, apellido = $4, contrasena = $5  WHERE correo_electronico= $1 RETURNING *",
      [id, id_rol, nombre, apellido, contrasena]
    );
    return result.rows[0];
  }
};
