const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post("/", (req, res) => {
  res.send({ message: `Hello ${req.body.name || "world"}` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
