const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor de Nexo Luxury corriendo en el puerto ${PORT}`);
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));


