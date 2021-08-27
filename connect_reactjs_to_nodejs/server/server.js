const express = require("express");
const app = express();
const path = require("path");
const port = 4000;
const cors = require("cors");
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send("working!");
});

app.post("/post-new-student-data", async (req, res) => {
  let newStudentData = req.body;

  fs.readFile(
    path.join(__dirname, "data", "students.json"),
    (err, currentData) => {
      if (err) throw err;
      const updatedStudentsData = JSON.parse(currentData);
      updatedStudentsData.push(newStudentData);
      fs.writeFileSync(
        path.join(__dirname, "data", "students.json"),
        JSON.stringify(updatedStudentsData),
        (err) => {
          if (err) throw err;
        }
      );
    }
  );
  // res.send(
  //   `new student data added! Name: ${newStudentData.name} Country: ${newStudentData.country}`
  // );
  console.log(
    `new student data added! Name: ${newStudentData.name} Country: ${newStudentData.country}`
  );
});

app.get("/home", cors(), async (req, res) => {
  const studentsData = fs.readFileSync(
    path.join(__dirname, "data", "students.json"),
    (err, data) => {
      if (err) throw err;
      return JSON.parse(data);
    }
  );
  res.send(studentsData);
});

app.listen(port, () => {
  console.log(`The server is listening at http://localhost:${port} (-ω-) ~ ☀️`);
});
