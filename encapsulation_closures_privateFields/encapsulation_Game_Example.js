class Player{
    #health;
    constructor(name, health){
        this.name=name;
        this.#health=health;
    }
    takeDamage(damage){
        this.#health-=damage;
        console.log(`${this.name} has ${this.#health} health left`);
    }
}

const player=new Player("Player1",100);
player.takeDamage(30);
// console.log(player.#health);