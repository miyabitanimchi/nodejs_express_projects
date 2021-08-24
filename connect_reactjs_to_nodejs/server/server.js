const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send("this is working!");
});

app.post("/post-name", async (req, res) => {
  let { name } = req.body;
  console.log(name);
});

app.get("/home", cors(), async (req, res) => {
  res.send("this is the data from node.js!");
});

app.listen(port, () => {
  console.log(`The server is listening at http://localhost:${port}`);
});
