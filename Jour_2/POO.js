class Respondent {
  constructor(name, isFree = true) {
    this.name = name;
    this.isFree = isFree;
};

    dispatchCall() {
if (isFree = true){
    console.log(`${this.name} a pris l'appel`)
}
    }
 

  class Manager extends Respondent {
    constructor(name, isFree = true) {
      this.name = name;
      this.isFree = isFree;
    }


}
