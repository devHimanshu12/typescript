

// classes are the blueprint of the individual object and objects are the instance of a class

class person {
    name:string = "Him"
    age:number = 28

    qualification() {
        return 'Graduated'
    }
}

var personObject = new person()
let myName = personObject.name 
let myAge  = personObject.age = 29
let qualification = personObject.qualification()

console.log(myName,myAge,qualification)

export default person