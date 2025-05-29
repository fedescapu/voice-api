const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.post('/', (req, res) => {
  const name = req.body.name || 'Stranger';
  res.json({ message: `Hello, ${name}` });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
