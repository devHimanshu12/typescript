"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = /** @class */ (function () {
    function person() {
        this.name = "Him";
        this.age = 28;
    }
    person.prototype.qualification = function () {
        return 'Graduated';
    };
    return person;
}());
var personObject = new person();
var myName = personObject.name;
var myAge = personObject.age = 29;
var qualification = personObject.qualification();
console.log(myName, myAge, qualification);
exports.default = person;
