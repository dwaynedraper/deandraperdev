const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/resume.pdf'));
})

const port = process.env.PORT || 3789;
app.listen(port, () => {
  console.log(`deandraper.dev running on http://localhost:${port}`);
})