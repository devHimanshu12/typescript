
// Encapsulation  is the wrapping of data or field and function together to restrict direct access of the data

class Employee{

    private _empId:number;
    name:string;
    
    getEmployeeId() : number {
        return this._empId
    }

    setEmpId(empId : number) {
        if(empId>0){
            this._empId = empId
        }else{
            console.log('id cannot be less than 0')
        }
    }
    
    
}


var employeeObj = new Employee()

// employeeObj.setEmpId(10)
employeeObj.setEmpId(-10)

console.log(employeeObj.getEmployeeId())

export default Employee

