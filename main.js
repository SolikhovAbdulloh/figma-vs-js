// let obj = {
//     name:"abdulloh",
//     age:12,
// }

const { strict } = require("assert");

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

// String.prototype.myNewMethod = function () {
//   return this.toUpperCase();
// };

