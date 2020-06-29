const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
//API to create file 
app.get("/", (req, res) => {
  fs.writeFile("date-time.txt", fileInside(), (err) => {
    if (err) throw err;
  });
  function fileInside() {
    const date=new Date();
    return date;
  }
  res.send(
    "date-time file is created inside the nodejs folder"
  );
});
//API to display all files 
app.get("/content", (req, res) => {
   fs.readdir("date-time.txt", (err, files) => {
    if (err) throw err;
    res.send(files);
  });
});
app.listen(port, () => {
  console.log(`server is listening ${port}`);
});
