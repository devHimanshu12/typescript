// an interface is an another way to name an object type

interface employee{
    name:string;
    experience:number
}

var employeeObj:employee = {
    name:'Himanshu',
    experience:4
}

//we can use an implements clause to check that a class satisfies a particular interface. 
//An error will be issued if a class fails to correctly implement it:


interface EmployeeRole{
    Role():void;
}


export class PermanentEmployee implements EmployeeRole{
    Role(){
        console.log('permanent on pay role emp')
    }
}

export class TempEmployee{
    Role(){
        console.log('contractual emp')
    }
}

