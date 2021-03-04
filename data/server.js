import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Server starts');
});

app.listen(9000, () => {
  console.log('Server start at http://localhost:9000');
});
