abstract class Employee {
  private _isFree: boolean = true;

  get isFree(): boolean {
    return this._isFree;
  }

  set isFree(value: boolean) {
    this._isFree = value;
  }
  // abstract method qui sera implementé par les classes
  handleCall(): void {}
}

class Respondent extends Employee {
  //
  handleCall(): void {
    console.log("Respondent prend l'appel");
  }
}
class Manager extends Employee {
  handleCall(): void {
    console.log("Manager prend l'appel");
  }
}
class Director extends Employee {
  handleCall(): void {
    console.log("Director prend l'appe");
  }
}

class CallCenter {
  private respondents: Respondent[] = [];
  private managers: Manager[] = [];
  private directors: Director[] = [];

  constructor() {
    // creation des employés
    for (let i = 0; i < 5; i++) {
      this.respondents.push(new Respondent());
    }
    for (let i = 0; i < 3; i++) {
      this.managers.push(new Manager());
    }
    for (let i = 0; i < 2; i++) {
      this.directors.push(new Director());
    }
  }

  dispatchCall(): void {
    // chercher un employé disponible pour prendre l'appel
    const respondent = this.respondents.find((r) => r.isFree);
    if (respondent) {
      respondent.isFree = false;

      respondent.handleCall();
      return;
    }
    const manager = this.managers.find((m) => m.isFree);
    if (manager) {
      manager.isFree = false;

      manager.handleCall();
      return;
    }
    const director = this.directors.find((d) => d.isFree);
    if (director) {
      director.isFree = false;

      director.handleCall();
      return;
    }
    console.log("personne n'est disponible pour prendre l'appel");
  }
}
let callCenter = new CallCenter();

for (let respondent of callCenter["respondents"]) {
  respondent.isFree = false;
}

for (let respondent of callCenter["managers"]) {
  respondent.isFree = false;
}
callCenter["managers"][0].isFree = true;
console.log(callCenter["managers"]);
callCenter.dispatchCall();
