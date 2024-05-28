class CallCenter {
    constructor(name, isFree=true){
    this.name=name
    this.isFree
    }


    dispatchCall() {
        if (Respondent.isFree = true){
            Respondent.answerCall()}
        else {
            if (Manager.isFree = true){
                Manager.answerCall()
            }
            else  {
                if (Director.isFree = true){
                    Director.answerCall()
                }
                else console.log("C'est la pause crêpes, merci de nous laisser tranquilles pour le moment.")
            }
        }
        
}




class Respondent {
    constructor(name, isFree = true) {
      this.name = name;
      this.isFree = isFree;
    }
  
    answerCall() {
      console.log(`${this.name} a pris l'appel`);
      this.isFree = false;
    }
  }
 

 

class Manager extends Respondent {
    constructor(name, isFree){
    super(name, isFree)
    }
}

class Director extends Respondent {
    constructor(name, isFree){
    super(name, isFree)
    }
}
