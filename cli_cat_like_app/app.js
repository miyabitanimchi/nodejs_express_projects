const fs = require("fs");
const process = require("process");

switch (process.argv[2]) {
  // Create a file
  case "--createFile":
    fs.appendFile(`views/${process.argv[3]}`, "Hello Universe", (err) => {
      if (err) throw err;
      console.log("file saved!");
    });
    break;
  // Write a file
  case "--writeFile":
    fs.writeFile(`views/${process.argv[3]}`, process.argv[4], (err) => {
      if (err) throw err;
      console.log("saved!");
    });
    break;
  // Append to a file
  case "--appendFile":
    fs.appendFile(`${process.argv[3]}`, process.argv[4], (err) => {
      if (err) throw err;
      console.log("content appended!");
    });
  // Rename a file
  case "--renameFile":
    fs.rename(process.argv[3], process.argv[4], (err) => {
      if (err) throw err;
      console.log("file renamed!");
    });
}
