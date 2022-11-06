const Character = require("./Character");

class Thief extends Character {
  toAttack(targetCharacter) {
    targetCharacter.healthPoints -=
      (this.attackPoints - targetCharacter.defensePoints) * 2;
  }
}

module.exports = Thief;
