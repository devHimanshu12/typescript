"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.Sleep = function () {
        console.log('sleeping');
    };
    Animal.prototype.Eat = function () {
        console.log('eating');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.Bark = function () {
        console.log('barking');
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.Meaow = function () {
        console.log('meaaoww');
    };
    return Cat;
}(Animal));
var DogObject = new Dog();
DogObject.Eat();
// var CatObj = new Cat()
// CatObj.Sleep()
// CatObj.Meaow()
