const Character = require("./Character");

class Mage extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints, magicPoints) {
    super(name, healthPoints, attackPoints, defensePoints);
    this.magicPoints = magicPoints;
  }

  toAttack(targetCharacter) {
    targetCharacter.healthPoints -=
      this.attackPoints + this.magicPoints - targetCharacter.defensePoints;
  }

  heal(targetCharacter) {
    targetCharacter.healthPoints += this.magicPoints * 2;
  }
}

module.exports = Mage;
