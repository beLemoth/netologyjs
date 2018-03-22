class Pokemon {
    constructor(name, level=0){
        this.name = name;
        this.level = level;
    }
    show(){
        console.log(`name: ${this.name}, level: ${this.level}`);
    }
}

Pokemon.prototype.valueOf = function() {
    return this.level;
};

module.exports = Pokemon;