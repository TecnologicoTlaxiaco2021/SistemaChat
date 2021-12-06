import app from "../app/config.js";
import fs from "fs";
import handlebars from "handlebars";

// Discuss page
app.get("/", (req, res) => {
  fs.readFile("./views/discuss.html", (err, data) => {
    if (err) throw err;
    res.write(data);
    return res.end();
  })           
});
