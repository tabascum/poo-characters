const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const chiclet = new Mage("Chiclet", 80, 120, 60, 50);
const jake = new Thief("Jake", 90, 100, 60);
const finn = new Warrior("Finn", 90, 90, 60, 100);

console.table({ chiclet, jake, finn });

finn.switchStance();
chiclet.toAttack(finn);
jake.toAttack(chiclet);

console.table({ chiclet, jake, finn });

finn.switchStance();
finn.toAttack(jake);
chiclet.heal(chiclet);

console.table({ chiclet, jake, finn });
