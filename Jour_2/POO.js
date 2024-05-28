// Imagine you have a call center with three levels of employees: respondent, manager, and director.
// An incoming telephone call must be first allocated to a respondent who is free.
// If the respondent can't handle the call, he or she must escalate the call to a manager.
// If the manager is not free or not able to handle it, then the call should be escalated to a director.
// Design the classes and data structures for this problem.
// Implement a method dispatchCall() which assigns a call to the first available employee.

//respondent répond au téléphone. si pas dispo -> manager. si pas dispo -> director.

class respondent {
    constructor(name, isFree=true) {
        this.name = name;
        this.isFree = isFree;
    }
    dispatchCall(){
    if (isFree = true) {
        console.log(`${ this.name } prends l'appel` )
    } else 
}
}

class manager extends respondent {
    constructor() {
        super()
    }
}

class director extends manager {
    constructor() {
        super()
    }
}


