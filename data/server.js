import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server starts');
});

app.listen(9000, () => {
  console.log('Server start at http://localhost:9000');
});
