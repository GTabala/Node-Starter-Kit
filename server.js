const express = require("express");
const app = express();


// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
// app.get("/", function (req, res) {
//     res.send("Hello World!");
//   });
  
  app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
  });
  app.get("/node", function (req, res) {
    res.send("Mm Node");
  });
  app.get("/Cyf", function (req, res) {
    res.send("Mm CYF");
  });
  app.get("/", function (req, res) {
    let searchQuery = req.query.search;
    res.send("Hello World! You searched for " + searchQuery);
  });

app.listen(3000, () => console.log("Server is listening on port 3000. !"));






