var ForagerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	this.color = 'yellow';
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.forage = function(val) {
	this.treasureChest.push(val);
}

ForagerBee.prototype.constructor = ForagerBee;
