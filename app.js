const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const facturaRoutes = require("./src/routes/facturaRoutes");
const parqueaderoRoutes = require("./src/routes/parqueaderoRoutes");
const rolRoutes = require("./src/routes/rolRoutes");
const inicioRoutes = require("./src/routes/inicioRoutes");

const app = express(); // Inicializamos express aquí

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api", facturaRoutes);
app.use("/api", parqueaderoRoutes);
app.use("/api", rolRoutes);
app.use("/api", inicioRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
