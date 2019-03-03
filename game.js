class Warrior {
  constructor(name) {
    this.name = name;
    this.type = 1;
    this.health = 100;
  }

  attack() {
    return Number((Math.random() * 10).toFixed()) * this.type;
  }
}

class Gladiator extends Warrior {
  constructor(name) {
    super(name);
  }
}

class Monster extends Warrior {
  constructor(name, type) {
    super(name, type);
  }
}

class Game {
  constructor(warriorA, warriorB) {
    this.warriorA = warriorA;
    this.warriorB = warriorB;
    this.winner = 'no one';
  }

  start() {
    while (this.warriorA.health >= 0 && this.warriorB.health >= 0) {
      const damageA = this.warriorA.attack();
      const damageB = this.warriorB.attack();

      this.warriorA.health = this.warriorA.health - damageB;
      this.warriorB.health = this.warriorB.health - damageA;
    }

    this.winner = this.warriorA.health > this.warriorB.health ?
      this.warriorA.name :
      this.warriorB.name;
  }
}

const gladiator = new Gladiator('gladiator', 2);
const monster = new Monster('monster', 3);
const game = new Game(gladiator, monster);

game.start();
console.log(game.winner);