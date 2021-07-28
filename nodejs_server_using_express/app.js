const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
  res.send('Hello World')
});

app.post('/hello', (req, res) => {
  res.send("You just called the post method at ' / hello'!\n")
});

app.listen(port, () => {
  console.log(`The server is listening from port ${port}`);
})