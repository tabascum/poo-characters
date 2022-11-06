class Character {
  constructor(name, healthPoints, attackPoints, defensePoints) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.defensePoints = defensePoints;
  }

  toAttack(targetCharacter) {
    targetCharacter.healthPoints -=
      this.healthPoints - targetCharacter.defensePoints;
  }
}

module.exports = Character;
