// it is a concept where a base class can be extending to other 
// classes so that its properties can be used by the derived classes
// and it will acquire the properties and method of base class

class Animal{

    Sleep(){
        console.log('sleeping')
    }

    Eat(){
        console.log('eating')
    }
    
}

export class Dog extends Animal{
    Bark(){
        console.log('barking')
    }
}

export class Cat extends Animal{
    Meaow(){
        console.log('meaaoww')
    }
}

var DogObject = new Dog()
DogObject.Eat()
var CatObj = new Cat()
CatObj.Sleep()
CatObj.Meaow()

