"use strict";
// an interface is an another way to name an object type
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempEmployee = exports.PermanentEmployee = void 0;
var employeeObj = {
    name: 'Himanshu',
    experience: 4
};
var PermanentEmployee = /** @class */ (function () {
    function PermanentEmployee() {
    }
    PermanentEmployee.prototype.Role = function () {
        console.log('permanent on pay role emp');
    };
    return PermanentEmployee;
}());
exports.PermanentEmployee = PermanentEmployee;
var TempEmployee = /** @class */ (function () {
    function TempEmployee() {
    }
    TempEmployee.prototype.Role = function () {
        console.log('contractual emp');
    };
    return TempEmployee;
}());
exports.TempEmployee = TempEmployee;
