var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
        this._isFree = true;
    }
    Object.defineProperty(Employee.prototype, "isFree", {
        get: function () {
            return this._isFree;
        },
        set: function (value) {
            this._isFree = value;
        },
        enumerable: false,
        configurable: true
    });
    // abstract method qui sera implementé par les classes
    Employee.prototype.handleCall = function () { };
    return Employee;
}());
var Respondent = /** @class */ (function (_super) {
    __extends(Respondent, _super);
    function Respondent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //
    Respondent.prototype.handleCall = function () {
        console.log("Respondent prend l'appel");
    };
    return Respondent;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.handleCall = function () {
        console.log("Manager prend l'appel");
    };
    return Manager;
}(Employee));
var Director = /** @class */ (function (_super) {
    __extends(Director, _super);
    function Director() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Director.prototype.handleCall = function () {
        console.log("Director prend l'appe");
    };
    return Director;
}(Employee));
var CallCenter = /** @class */ (function () {
    function CallCenter() {
        this.respondents = [];
        this.managers = [];
        this.directors = [];
        // creation des employés
        for (var i = 0; i < 5; i++) {
            this.respondents.push(new Respondent());
        }
        for (var i = 0; i < 3; i++) {
            this.managers.push(new Manager());
        }
        for (var i = 0; i < 2; i++) {
            this.directors.push(new Director());
        }
    }
    CallCenter.prototype.dispatchCall = function () {
        // chercher un employé disponible pour prendre l'appel
        var respondent = this.respondents.find(function (r) { return r.isFree; });
        if (respondent) {
            respondent.isFree = false;
            respondent.handleCall();
            return;
        }
        var manager = this.managers.find(function (m) { return m.isFree; });
        if (manager) {
            manager.isFree = false;
            manager.handleCall();
            return;
        }
        var director = this.directors.find(function (d) { return d.isFree; });
        if (director) {
            director.isFree = false;
            director.handleCall();
            return;
        }
        console.log("personne n'est disponible pour prendre l'appel");
    };
    return CallCenter;
}());
var callCenter = new CallCenter();
for (var _i = 0, _a = callCenter["respondents"]; _i < _a.length; _i++) {
    var respondent = _a[_i];
    respondent.isFree = false;
}
for (var _b = 0, _c = callCenter["managers"]; _b < _c.length; _b++) {
    var respondent = _c[_b];
    respondent.isFree = false;
}
callCenter["managers"][0].isFree = true;
console.log(callCenter["managers"]);
callCenter.dispatchCall();
