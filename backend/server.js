import express from 'express';
import data from './data.js';

const app = express();
// :slug we can get the slug tht user entered 2 get data abt this product from BE
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
// BE api to return prod based on slug of produ
// return product info based on their slug
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
  res.send(data.products);
});

const port = process.env.PORT || 5000;
// `` using backtik literal to access in $
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
