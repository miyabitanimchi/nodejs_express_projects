const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/api/people', (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  fs.readFile('./db.json', (err, json) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    res.end(json);
  })
})

app.listen(5000, () => console.log('The server is listening from port 5000'));

