function cat() {
    this.core = [];
}
cat.prototype.eat = function (mouse) {
    this.core.push(mouse);
}
