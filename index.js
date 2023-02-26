const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const server = app.listen(0, () => {
  const port = server.address().port;
  console.log(`App listening on port ${port}!`);
});
