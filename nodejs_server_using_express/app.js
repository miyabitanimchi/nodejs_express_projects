import Express from 'express';
import Menu from "./menu.js";

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }))

const mid = (req, res, next) => {
  console.log(req.query);
  console.log(req.params);
  next();
}



// app.get('/', (req, res) => {
//   res.send('Hello World')
// });

app.get('/menu/:id', mid, (req, res) => {
  // res.send('Welcome To Our Cafe!');
  res.json(Menu.find((menu) => {
    return + req.params.id === menu.id
  }));
  res.send(req.params.id);

})

app.post("/add", (req, res) => {
  console.log(req.body.id);
  res.sendStatus(200);
})

app.post('/hello', (req, res) => {
  res.send("You just called the post method at ' / hello'!\n")
});

app.listen(port, () =>
  console.log(`The server is listening from port ${port}`)
)