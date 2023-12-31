const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const { heroes } = require("./charactersFile.js");
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(heroes);
});

app.get("/api/:heroName", (req, res) => {
  const herosName = req.params.heroName.toLowerCase();
  if (heroes[herosName]) {
    res.json(heroes[herosName]);
  } else {
    res.json({ message: "No data available for this character right now!" });
  }
});
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server started at port ${PORT}`);
});
