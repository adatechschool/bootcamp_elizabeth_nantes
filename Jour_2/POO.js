class Respondent {
  constructor(name, isFree) {
    this.name = name;
    this.isFree = isFree;
  }

  answerCall() {
    console.log(`${this.name} a pris l'appel`);
    this.isFree = false;
  }
}

class Manager extends Respondent {
  constructor(name, isFree) {
    super(name, isFree);
  }
}

class Director extends Respondent {
  constructor(name, isFree) {
    super(name, isFree);
  }
}

class CallCenter {
  constructor(name, respondent, manager, director) {
    this.name = name;
    this.Respondent = respondent;
    this.Manager = manager;
    this.Director = director;
  }

  dispatchCall() {
    if (this.Respondent.isFree === true) {
      this.Respondent.answerCall();
    } else {
      if (this.Manager.isFree === true) {
        this.Manager.answerCall();
      } else {
        if (this.Director.isFree === true) {
          this.Director.answerCall();
        } else
          console.log(
            "C'est la pause crêpes, merci de nous laisser tranquilles pour le moment."
          );
      }
    }
  }
}

let Respondent1 = new Respondent('Edith', (isFree = true));
let Manager1 = new Manager('Fabienne', (isFree = true));
let Director1 = new Director('Pierre', (isFree = true));
let CallCenter1 = new CallCenter('HeyHey', Respondent1, Manager1, Director1);

CallCenter1.dispatchCall();
