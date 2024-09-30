// let obj = {
//     name:"abdulloh",
//     age:12,
// }

// const { strict } = require("assert");
// const { log } = require("console");
// const { get } = require("http");

// let obj2 = {...obj,fullname:obj.name + 'bek'}

// console.log(obj2);

// bu class exspression

//  class a  {
//     constructor(name,age,price){
//         this.name = name;
//         this.age = age;
//         this.price = price;

//     }
// }

// console.log(new a('as',12,123));

// bu class declaration

// bu birikitirilgan ozgaruchidan ochadi malumotlarni undan oladi

//  let b = class a  {
//     constructor(name,age,price){
//         this.name = name;
//         this.age = age;
//         this.price = price;

//     }
// }

// console.log(new b('as',12,123));

// bu class anonim expression (nomsiz )

// let a = class  {
//     constructor(name,age,price){
//         this.name = name;
//         this.age = age;
//         this.price = price;

//     }
// }

// console.log(new a('asadulla',12,123));

// # bu belgi malumotni undefined qiladi malumot korinmaydi

// class User {
//     // #yosh;
//     constructor(ism,yosh){
//         this.ism = ism;
//         this.yosh = yosh;
//     }

//     set setFuc(yosh){
//          this.yosh = yosh;
//     }

// }

// let person = new User('Abdulloh','89')

// //ARRAY ORQALI MUROJAT QILISH
// person.setFuc = yosh[0]
// console.log(person);

// console.log(person.getFuc);

// 1-masala

// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }

// var obj = new Labrador("Chapa", 12, "m", "Xatico");

// 2-masala tushunmadm

// 3-masala

// function factory(x) {
//   return function Pow(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(arr[i] * x);
//     }
//     return result;
//   }
// }

// const a = factory(5)

// console.log(a([1,2,3]));

//4-masala

// String.prototype.myMethod = function () {
//   return this.toUpperCase();
// };

//5-masala
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get info() {
//     return `${this.name}s age is ${this.age}`;
//   }
// }
// const person = new Person("Johns", 34);

// console.log(person.info);

//6-masala

// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firsName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;

//   }
//   fullName(){

//                 return `${this.firsName} ${this.lastName}`
//             }

//   }

// obj = new Person('Abdulloh','Solikhov',25,'Erkak')

// console.log(obj.fullName());

// 7-masala



// 8-masala

// class Animal{
//   constructor(name,type){
    
//     this.name = name;
//     this.type = type;
    
//   } 
//   toString(){

//    return `${this.name} is a ${this.type}`
//   }
// }

// var dog = new Animal('Max','dog')

// console.log(dog.toString());
