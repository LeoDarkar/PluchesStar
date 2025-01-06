const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes/emailRoutes'));
app.listen('3000', () => {
  console.log(`Servidor en ejecución en http://localhost:${3000}`);
});