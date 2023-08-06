class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = -1;
    let currentVampire = this;

    while (currentVampire) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
    return true;}

    return false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

const originalVampire = new Vampire("Original", 1800);
  const childVampire = new Vampire("Child", 1850);
  const grandchildVampire = new Vampire("Grandchild", 1900);

  originalVampire.offspring.push(childVampire);
  childVampire.creator = originalVampire;
  childVampire.offspring.push(grandchildVampire);
  grandchildVampire.creator = childVampire;

console.log()
console.log(originalVampire.name, originalVampire.vampireRank)
console.log(childVampire.name, childVampire.vampireRank)
console.log(grandchildVampire.name, grandchildVampire.vampireRank)

// npm test -- test/1*.js  # will run file test/1_addOffspring.js only
// npm test -- test/2*.js  # will run file test/2_numberOfOffspring.js only