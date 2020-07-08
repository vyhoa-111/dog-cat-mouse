function Dog(){
	this.stomach = [];
}
Dog.prototype = function (cat){
	this.stomach.push(cat);
}