import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [home, setHome] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/home").then((res) => {
      setHome(res.data);
    });
  }, []);

  const postName = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/post-name", {
        name,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <form onSubmit={postName}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Send Name</button>
      </form>
      {home}
    </div>
  );
}

export default App;
