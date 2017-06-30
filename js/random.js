const minimumWordLength = 4;
const maximumWordLength = 10;

module.exports = class Random {
  static getInt(min, max) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);

    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  }

  static getIntTriplet() {
    return [
      Random.getInt(minimumWordLength, maximumWordLength),
      Random.getInt(minimumWordLength, maximumWordLength),
      Random.getInt(minimumWordLength, maximumWordLength),
    ];
  }
};
