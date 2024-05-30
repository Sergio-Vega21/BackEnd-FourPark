const pool = require("../config/database");

module.exports = {
  async create(parqueadero) {
    const {
      id_parqueadero,
      idciudad,
      id_disponibilidad,
      id_tipo,
      nombre,
      cantidad_espacios,
      precio_minuto_moto,
      precio_minuto_auto,
      tarifap_moto,
      tarifap_auto,
    } = parqueadero;
    const result = await pool.query(
      "INSERT INTO parqueadero (id_parqueadero, idciudad, id_disponibilidad, id_tipo, nombre, cantidad_espacios, precio_minuto_moto, precio_minuto_auto, tarifap_moto, tarifap_auto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ,$10) RETURNING *",
      [
        id_parqueadero,
        idciudad,
        id_disponibilidad,
        id_tipo,
        nombre,
        cantidad_espacios,
        precio_minuto_moto,
        precio_minuto_auto,
        tarifap_moto,
        tarifap_auto,
      ]
    );
    return result.rows[0];
  },

  async findAll() {
    const result = await pool.query(`
    SELECT p.*, u.direccion, d.hora_apertura, d.hora_cierre
    FROM parqueadero p
    JOIN ubicacion u ON p.idciudad = u.idciudad
    JOIN disponibilidad d ON p.id_disponibilidad = d.id_disponibilidad;

    `);
    return result.rows;
  },

  async findById(id) {
    const result = await pool.query(
      `
      SELECT p.*, u.direccion
      FROM parqueadero p
      JOIN ubicacion u ON p.idciudad = u.idciudad
      WHERE p.id_parqueadero = $1
    `,
      [id]
    );
    return result.rows[0];
  },

  async update(id, parqueadero) {
    const {
      idciudad,
      id_disponibilidad,
      id_tipo,
      nombre,
      cantidad_espacios,
      precio_minuto_moto,
      precio_minuto_auto,
      tarifap_moto,
      tarifap_auto,
    } = parqueadero;
    const result = await pool.query(
      "UPDATE parqueadero SET idciudad = $2, id_disponibilidad = $3, id_tipo = $4, nombre = $5, cantidad_espacios = $6, precio_minuto_moto = $7, precio_minuto_auto = $8, tarifap_moto = $9, tarifap_auto = $10 WHERE id_parqueadero = $1 RETURNING *",
      [
        id,
        idciudad,
        id_disponibilidad,
        id_tipo,
        nombre,
        cantidad_espacios,
        precio_minuto_moto,
        precio_minuto_auto,
        tarifap_moto,
        tarifap_auto,
      ]
    );
    return result.rows[0];
  },

  async delete(id) {
    const result = await pool.query(
      "DELETE FROM parqueadero WHERE id_parqueadero = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  },
};
