let express = require('express');
let app = express();
const PORT = 3000;

// Rota básica
app.get('/', (req, res) => {
    console.log("Hello World"); // Registra "Hello World" no console
    res.send('Hello World'); // Responde ao cliente
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
