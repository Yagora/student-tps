"use strict";

class Character {
  constructor(healthPoint, damageMin, damageMax) {
    this._healthPoint = healthPoint;
    this._damageMin = damageMin;
    this._damageMax = damageMax;
  }

  get healthPoint() {
    return this._healthPoint;
  }

  takeDamages(damages) {
    this._healthPoint -= damages;
  }

  dealDamages() {
    const damageRange = this._damageMax - this._damageMin;
    const randomNumber = Math.floor(Math.random() * (damageRange + 1));
    return randomNumber + this._damageMin;
  }
}

class Player extends Character {
  constructor() {
    super(100, 2, 10);
  }
  takeDamages(damages) {
    super.takeDamages(damages);
    if (this.healthPoint <= 0) {
      console.log("JE TREPASSE !!");
    } else {
      console.log("Il me reste " + this._healthPoint + " points de vie");
    }
  }
  dealDamages() {
    const damages = super.dealDamages();
    console.log("-- J'inflige " + damages + " points de dégat");
    return damages;
  }
}

class ChildMonster extends Character {
  constructor() {
    super(10, 0, 4);
  }
  takeDamages(damages) {
    super.takeDamages(damages);
    if (this.healthPoint <= 0) {
      console.log("Petit monstre meurt");
    } else {
      console.log(
        "Il reste " + this._healthPoint + " points de vie au petit monstre"
      );
    }
  }
  dealDamages() {
    const damages = super.dealDamages();
    console.log("-- Petit monstre inflige " + damages + " points de dégat");
    return damages;
  }
}

class Monster extends Character {
  constructor() {
    super(20, 1, 6);
  }
  takeDamages(damages) {
    super.takeDamages(damages);
    if (this.healthPoint <= 0) {
      console.log("Gros monstre meurt");
    } else {
      console.log(
        "Il reste " + this._healthPoint + " points de vie au gros monstre"
      );
    }
  }
  dealDamages() {
    const damages = super.dealDamages();
    console.log("-- Gros monstre inflige " + damages + " points de dégat");
    return damages;
  }
}

module.exports = {
  Player,
  ChildMonster,
  Monster,
};
