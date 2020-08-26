const fs = require('fs');

const breedDetailsFromFile = (breed, done) => {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) return data;
    return done(data);
  });
};

const printOutCatBreed = breed => {
  console.log('Return value: ', breed);
};
breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetailsFromFile;