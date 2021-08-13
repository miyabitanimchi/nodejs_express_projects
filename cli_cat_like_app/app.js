const fs = require("fs");
const process = require("process");
const path = require("path");

switch (process.argv[2]) {
  // Create a file
  case "--createFile":
    fs.appendFile(`files/${process.argv[3]}`, process.argv[4], (err) => {
      if (err) throw err;
      console.log("file saved!");
    });
    break;
  // Write a file
  case "--writeFile":
    fs.writeFile(`files/${process.argv[3]}`, process.argv[4], (err) => {
      if (err) throw err;
      console.log("saved!");
    });
    break;
  // Append to a file
  case "--appendFile":
    fs.appendFile(`files/${process.argv[3]}`, process.argv[4], (err) => {
      if (err) throw err;
      console.log("content appended!");
    });
    break;
  // Rename a file
  case "--renameFile":
    fs.rename(`files/${process.argv[3]}`, `files/${process.argv[4]}`, (err) => {
      if (err) throw err;
      console.log("file renamed!");
    });
    break;
  // Delete a files
  case "--deleteFile":
    fs.unlink(`files/${process.argv[3]}`, (err) => {
      if (err) throw err;
      console.log("file deleted");
    });
    break;
  // List files
  case "--listFiles":
    fs.readdir("files/", (err, files) => {
      if (err) throw err;
      files.forEach((file) => console.log(file));
    });
    break;
  // Copy a file
  case "--copyFile":
    // By using COPYFILE_EXCL, the operation will fail if process.argv[4] exists.
    fs.copyFile(
      `files/${process.argv[3]}`,
      `files/${process.argv[4]}`,
      fs.constants.COPYFILE_EXCL,
      (err) => {
        if (err) throw err;
        console.log("The file could not be copied");
      }
    );
    console.log(`${process.argv[3]} was copied to ${process.argv[4]}`);
    break;
  case "--moveFile":
    const currentPath = path.join(__dirname, "files/", process.argv[3]);
    const destinationPath = path.join(__dirname, "files2/", process.argv[4]);
    fs.rename(currentPath, destinationPath, (err) => {
      if (err) throw err;
      console.log("Successfully moved the file!");
    });
  case "--seeFileSize":
    const fileInfo = fs.statSync(process.argv[3]);
    console.log(fileInfo.size);
  case "--viewFileContents":
    fs.readFile(process.argv[3], "utf-8", (err, contents) => {
      if (err) throw err;
      console.log(contents);
    });
}
