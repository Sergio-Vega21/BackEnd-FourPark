const express = require('express');
const bodyParser = require('body-parser');
const facturaRoutes = require('./src/routes/facturaRoutes');
const parqueaderoRoutes = require('./src/routes/parqueaderoRoutes'); 
const rolRoutes = require('./src/routes/rolRoutes'); 


const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api', facturaRoutes);
app.use('/api', parqueaderoRoutes);
app.use('/api', rolRoutes);


// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
