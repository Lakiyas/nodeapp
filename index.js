const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(process.env.PORT || 80, '0.0.0.0', () => {
  console.log('App listening on port 80!');
});
