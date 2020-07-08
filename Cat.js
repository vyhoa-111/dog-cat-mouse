function Cat(){
	this.stomach = [];
}
Cat.prototype = function (mouse){
	this.stomach.push(mouse);
}
module.exports = Cat;