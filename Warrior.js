const Character = require("./Character");

class Warrior extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints, shieldPoints) {
    super(name, healthPoints, attackPoints, defensePoints);
    this.shieldPoints = shieldPoints;
    this.stance = "attacking";
  }

  toAttack(targetCharacter) {
    if (this.stance === "attacking") {
      super.toAttack(targetCharacter);
    }
  }

  switchStance() {
    if (this.stance === "attacking") {
      this.stance = "defending";
      this.defensePoints += this.shieldPoints;
    } else {
      this.stance = "attacking";
      this.defensePoints -= this.shieldPoints;
    }
  }
}

module.exports = Warrior;
