function dog() {
    this.core = [];
}
dog.prototype.eat = function (cat) {
    this.core.push(cat);
}