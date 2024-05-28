// Imagine you have a call center with three levels of employees: respondent, manager, and director.
// An incoming telephone call must be first allocated to a respondent who is free.
// If the respondent can't handle the call, he or she must escalate the call to a manager.
// If the manager is not free or not able to handle it, then the call should be escalated to a director.
// Design the classes and data structures for this problem.
// Implement a method dispatchCall() which assigns a call to the first available employee.

//respondent répond au téléphone. si pas dispo -> manager. si pas dispo -> director.

class respondent {
    constructor(name, isFree) {
        this.name = name;
        this.isFree = isFree;
    }
    answerCall() {
        console.log(`${this.name} prends l'appel.`);
        this.isFree = false;
        console.log(`${this.name} n'est plus disponible.`);
    }
}

class manager extends respondent {
    constructor(name, isFree) {
        super(name, isFree)
    }
}

class director extends manager {
    constructor(name, isFree) {
        super(name, isFree)
    }
}

class callcenter {
    constructor(respondent, manager, director) {
        this.respondent = respondent;
        this.manager = manager;
        this.director = director;

    }
    dispatchCall() {
        if (this.respondent.isFree === true) {
            console.log(`${this.respondent.name} est disponible pour prendre l'appel.`);
            this.respondent.answerCall();
        } else {
            console.log(`${this.respondent.name} n'est pas disponible pour prendre l'appel.`);
            console.log(`${this.manager.name} prends le relai.`);
            if (this.manager.isFree === true) {
                console.log(`${this.manager.name} est disponible pour prendre l'appel.`);
                this.manager.answerCall();
            } else {
                console.log(`${this.manager.name} n'est pas disponible pour prendre l'appel.`);
                console.log(`${this.director.name} prends le relai.`);
                if (this.director.isFree === true) {
                    console.log(`${this.director.name} est disponible pour prendre l'appel.`);
                    this.director.answerCall();
                } else {
                    console.log(`${this.director.name} n'est pas disponible pour prendre l'appel.`);
                    console.log(`Personne n'est disponible, veuillez réitérer votre appel ultérieurement.`);
                }
            }
        }
    }
}
    
let respondent1 = new respondent('Victor', false);
let manager1 = new manager('Paola', false);
let director1 = new director('Talula', false);
let center = new callcenter(respondent1, manager1, director1);

center.dispatchCall();