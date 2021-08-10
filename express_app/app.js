const express = require('express');
const app = express();
const port = 3000;

const process = require('process');
const os = require('os');

app.get('/arch', (req, res) => res.send(`This computer architecture is ${process.arch}`));
app.get('/cpu', (req, res) => res.send(`Model : ${os.cpus()[0].model}`));
app.get('/ram', (req, res) => res.send(process.memoryUsage()));
app.get('/hostname', (req, res) => res.send(`This computer's hostname is ${os.hostname()}`));
app.get('/ip', (req, res) => res.send(`This computer's IP address is ${os.networkInterfaces().en0[3].address}`));

app.listen(port, () => console.log(`The server is listening from port ${port}`));