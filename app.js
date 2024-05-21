const express = require('express');
const bodyParser = require('body-parser');
const facturaRoutes = require('./src/routes/facturaRoutes');
const pool = require('./src/config/database');

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api', facturaRoutes);
// app.use('/api', parqueaderoRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
