"use strict";
class Employee {
    constructor(name, level, isAvailable) {
        this.name = name;
        this.level = level;
        this.isAvailable = isAvailable;
    }
    takeCall() {
        this.isAvailable = false;
    }
}
const respondant = new Employee("Bernardine", "respondant", true);
const manager = new Employee("Constantine", "manager", true);
const director = new Employee("Corinne", "director", true);
function dispatchCall() {
    let incomingCall = 3;
    while (incomingCall > 0) {
        if (respondant.isAvailable) {
            incomingCall--;
            respondant.isAvailable = false;
            console.log("respundant took the call !");
        }
        else if (manager.isAvailable) {
            incomingCall--;
            manager.isAvailable = false;
            console.log("manager took the call !");
        }
        else if (director.isAvailable) {
            incomingCall--;
            director.isAvailable = false;
            console.log("director is very angry since she took the call !");
        }
    }
}
dispatchCall();
