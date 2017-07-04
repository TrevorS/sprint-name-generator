const fs = require('fs');
const Random = require('./random');

module.exports = class Words {
  constructor(path, minWordLength, maxWordLength) {
    this.dict = Words.loadDictionary(path);

    this.minWordLength = minWordLength;
    this.maxWordLength = maxWordLength;
  }

  oneOfLength(count) {
    const words = this.dict[count];

    return words[Random.getInt(0, words.length)];
  }

  getSprintName(numberOfWords) {
    const lengths = Random.getInts(numberOfWords,
      this.minWordLength, this.maxWordLength);

    return lengths.map(wordLength => this.oneOfLength(wordLength));
  }

  static loadDictionary(path) {
    return fs.readFileSync(path, { encoding: 'utf-8' })
      .split('\n')
      .reduce((results, word) => {
        const length = word.length;
        if (results[length]) {
          results[length].push(word);
        } else {
          results[length] = [word];
        }

        return results;
      }, {});
  }
};
