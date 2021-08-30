import "./App.css";
import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [studentsData, setstudentsData] = useState([]);
  const [isListUpdated, setIsListUpdated] = useState(false);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await axios.get("http://localhost:4000/home");
        setstudentsData(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(`Error occured: ${err}`);
      }
    };
    callAPI();
  }, [isListUpdated]);

  const postNewStudentData = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/post-new-student-data",
        {
          id: Date.now(), // random id
          name: name,
          country: country,
        },
        {
          headers: {
            // It indicates that the request body format is JSON.
            "Content-Type": "application/json",
          },
        }
      );
      setIsListUpdated((prevState) => !prevState);
      setName("");
      setCountry("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={postNewStudentData}>
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
          <button type="submit">Add Student</button>
        </form>
        <div>
          {studentsData.length !== 0 &&
            studentsData.map((student, index) => {
              return (
                <div key={index}>
                  <p>
                    Name: {student.name} | Country: {student.country}
                  </p>
                  <p></p>
                </div>
              );
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
