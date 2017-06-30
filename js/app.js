const express = require('express');
const path = require('path');

const Words = require('./words');

const port = process.env.PORT || 3000;
const root = path.join(__dirname, '../public');

const wordsPath = path.join(__dirname, '../data/words');
const words = new Words(wordsPath);

const app = express();

app.use(express.static(root));

app.get('/name', (req, res) => {
  const sprintName = words.getSprintName();

  res.json({ sprintName });
});

app.get('/words/:count', (req, res) => {
  const count = req.params.count;

  res.json({ word: words.oneOfLength(count) });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Sprint Name Generator: Now Running.');
});
