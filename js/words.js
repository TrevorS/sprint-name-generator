const fs = require('fs');
const Random = require('./random');

module.exports = class Words {
  constructor(path) {
    this.dict = Words.loadDictionary(path);
  }

  oneOfLength(count) {
    const words = this.dict[count];

    return words[Random.getInt(0, words.length)];
  }

  getSprintName() {
    const [lengthOne, lengthTwo, lengthThree] = Random.getIntTriplet();

    return [
      this.oneOfLength(lengthOne),
      this.oneOfLength(lengthTwo),
      this.oneOfLength(lengthThree),
    ].map(word => word.toLowerCase()).join(' ');
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
