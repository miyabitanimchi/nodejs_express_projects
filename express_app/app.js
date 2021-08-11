const express = require('express');
const app = express();
const port = 3000;
const diskSpace = require('check-disk-space').default;

const process = require('process');
const os = require('os');

const showDiskspace = () => {

}

app.get('/api/arch', (req, res) => res.send(`This computer architecture is ${process.arch}`));
app.get('/api/cpu', (req, res) => res.send(`Model : ${os.cpus()[0].model}`));
app.get('/api/ram', (req, res) => res.send(`${String(os.totalmem() / (1024 ** 3))} GB`));
app.get('/api/diskspace', (req, res) => diskSpace('/Users/miyabi/').then((diskSpace) => {
  res.send(`The total memory is ${String(Math.round(diskSpace.size / (1024 ** 3)))} GB, and the free memory is ${String(Math.round(diskSpace.free / (1024 ** 3)))} GB.`);
}));
app.get('/api/hostname', (req, res) => res.send(`This computer's hostname is ${os.hostname()}`));
app.get('/api/ip', (req, res) => res.send(`This computer's IP address is ${os.networkInterfaces().en0[3].address}`));

app.listen(port, () => console.log(`The server is listening from port ${port}`));