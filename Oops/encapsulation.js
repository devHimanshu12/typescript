"use strict";
// Encapsulation  is the wrapping of data or field and function together to restrict direct access of the data
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getEmployeeId = function () {
        return this._empId;
    };
    Employee.prototype.setEmpId = function (empId) {
        if (empId > 0) {
            this._empId = empId;
        }
        else {
            console.log('id cannot be less than 0');
        }
    };
    return Employee;
}());
var employeeObj = new Employee();
// employeeObj.setEmpId(10)
employeeObj.setEmpId(-10);
console.log(employeeObj.getEmployeeId());
exports.default = Employee;
