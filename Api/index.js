const express = require('express');
const cors = require('cors');
const products = require('./products');
const PORT = process.env.PORT || 3030;

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));