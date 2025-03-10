import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Server starts');
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`);
});
