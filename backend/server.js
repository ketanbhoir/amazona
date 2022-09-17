import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
// `` using backtik literal to access in $
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
