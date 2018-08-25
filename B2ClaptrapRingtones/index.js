const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(file => path.basename(file) !== 'index');

const claptrap = {
  random() {
    return files[Math.floor(Math.random() * files.length)];
  }
};

module.exports = claptrap;
