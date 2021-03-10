// Simple factory
class Monster {
  constructor(type, level) {
    this._type = type;
    this._level = level;
  }

  get type() {
    return this._type;
  }

  get level() {
    return this._level;
  }
}

const MonsterFactory = {
  makeMonster: function (type, level) {
    return new Monster(type, level);
  },
};

const dragon = MonsterFactory.makeMonster("Dragon", 17);

// Factory method
class Dragon {
  constructor() {
    this.health = 50;
  }

  attack() {
    this.health -= 10;
  }
}

class Snake {
  constructor() {
    this.health = 40;
  }

  attack() {
    this.health -= 20;
  }
}

class Player {
  fightMonster() {
    const monster = this.makeMonster();
    monster.attack();
    return monster;
  }
}

class Warrior extends Player {
  makeMonster() {
    return new Dragon();
  }
}

class Knight extends Player {
  makeMonster() {
    return new Snake();
  }
}

const player1 = new Warrior();
console.log(player1.fightMonster());

const player2 = new Knight();
player2.fightMonster();

// Abstract factory
class WinFactory {
  createButton() {
    return new WinButton();
  }
}

class MacFactory {
  createButton() {
    return new MacButton();
  }
}

class WinButton {
  paint() {
    console.log("Rendered a Windows button");
  }
}

class MacButton {
  paint() {
    console.log("Rendered a Mac button");
  }
}

class Application {
  factory;
  button;

  constructor(factory) {
    this.factory = factory;
  }

  createUI() {
    this.button = factory.createButton();
  }

  paint() {
    this.button.paint();
  }
}

let factory;
let OS = "Windows";

if (OS === "Windows") {
  factory = new WinFactory();
} else if (OS == "Mac") {
  factory = new MacFactory();
}

const app = new Application(factory);

app.createUI();
app.paint(); // Output: Rendered a Windows button
