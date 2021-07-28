import Express from 'express';
import Menu from "./menu.js";
import fs from 'fs';
import ejs from 'ejs';


const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
// STATIC FILE
app.use(Express.static('public'));
app.set('ejs', ejs.renderFile);

const mid = (req, res, next) => {
  console.log(req.query);
  console.log(req.params);
  next();
}

// GET
app.get('/htmlfile', (req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) console.log(err);
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(data);
    res.end();
    // res.send(data.toString());
  })
});

app.get('/menu/:id', mid, (req, res) => {
  res.json(Menu.find((menu) => {
    return + req.params.id === menu.id
  }));
  res.send(req.params.id);
})

// POST
app.post("/add", (req, res) => {
  console.log(req.body.id);
  res.sendStatus(200);
})

app.post('/hello', (req, res) => {
  res.send("You just called the post method at ' / hello'!\n")
});

// PUT
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
});

// DELETE
app.delete('/deleteuser', function (req, res) {
  res.send('Got a DELETE request at /user')
});

// STATIC
app.get('/static', (req, res) => {
  res.render('static.ejs', {
    title: 'Hello World!',
    content: 'Lorem Ipsum yay yay yay!'
  });
});

app.listen(port, () =>
  console.log(`The server is listening from port ${port}`)
);

