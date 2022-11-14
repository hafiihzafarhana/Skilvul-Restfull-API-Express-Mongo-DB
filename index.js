const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');

const app = express();
env.config();

const db = require('./config/config');
const routesList = require('./routes/');

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT;

app.use(routesList);

db
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error.message} did not connect`));