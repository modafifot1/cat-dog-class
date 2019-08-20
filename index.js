const chalk = require('chalk');
var dog = require('./dog');
var puppy = new dog('cuncon');
puppy.sayhi();
console.log(chalk.red(puppy.name));

