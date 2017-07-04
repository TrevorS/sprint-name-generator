const express = require('express');
const path = require('path');

const Words = require('./words');

const minWordLength = 4;
const maxWordLength = 10;
const numberOfWords = 3;

const wordsPath = path.join(__dirname, '../data/words');
const words = new Words(wordsPath, minWordLength, maxWordLength);

const port = process.env.PORT || 3000;
const root = path.join(__dirname, '../public');

const app = express();

app.use(express.static(root));

app.get('/name', (req, res) => {
  const sprintName = words.getSprintName(numberOfWords);

  res.json({ sprintName });
});

app.get('/word/:wordLength', (req, res) => {
  const { wordLength } = req.params;

  const word = words.oneOfLength(wordLength);

  res.json({ word });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Sprint Name Generator: Now Running.');
});
