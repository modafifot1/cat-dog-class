const chalk = require('chalk');

function dog(name) {
    this.name = name;
    this.core = [];
}
dog.prototype.eat = function (cat) {
    this.core.push(cat);
}
dog.prototype.sayhi = function () {
    console.log(chalk.blue('gau gau gau'));
}
module.exports = dog;