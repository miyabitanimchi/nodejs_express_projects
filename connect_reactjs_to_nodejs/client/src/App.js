import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [studentsData, setstudentsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/home").then((res) => {
      setstudentsData(res.data);
      console.log(res.data);
    });
  }, [name, country]);

  const postNewStudentdata = async (e) => {
    e.preventDefault();
    // setName("");
    // setCountry("");

    try {
      await axios.post("http://localhost:4000/post-new-student-data", {
        name: name,
        country: country,
      });
      // setName(""); // ?
      // setCountry(""); // ?
    } catch (err) {
      console.log(err);
    }

    console.log("worked");
    setName("");
    setCountry("");
  };
  return (
    <div className="App">
      <form onSubmit={postNewStudentdata}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Send Name</button>
      </form>
      <div>
        {studentsData.length !== 0 &&
          studentsData.map((student, index) => {
            return (
              <div key={index}>
                <p>
                  Name: {student.name} / Country: {student.country}
                </p>
                <p></p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
