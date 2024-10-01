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

// class Person {
//     #name;

//   constructor(name, age, year) {
//     this.#name = name;
//     this.age = age;
//     this.year = year;
//   }
// }

// class User1 extends Person{    extends bu meros olish yani bu yerda Car class Preson dan hamma metodlarmi malumotlarni oladi
//     constructor(name,age,year,color){
//         super(name,age,year,color);
//             this.color

//     }
// }

// class Car extends Person {
//   constructor(name, age, year, color) {
//     this.color = color;
//     this.name = name;
//     this.age = age;
//     this.year = year;
//   }
// }

// const j = new Car("Asad", 12, 124, "QORA");

// console.log(j.Car);

// class Persona {
//   constructor(name, age, year) {
//     this.name = name;
//     this.age = age;
//     this.year = year;
//   }
// }

// const user = new Person('Abdulloh',25,1999)

// console.log(user instanceof Persona); //instanceof bu yerda true false qaytaradi agar user Personga tegishli bosa true yoq bolsa false qaytaradi

// let map = new Map()

// map.set(1,"B");
// map.set(true, "haqiqiy qiymat");
// // console.log(map);

// console.log(map.has('B'));


// Yangi Map yaratish
// let map = new Map();

// // Kalit-qiymat juftligini qo'shish
// map.set('name', 'John');
// map.set(1, 'one');          // Raqamli kalit
// map.set(true, 'boolean');   // Boolean kalit

// // Qiymatlarni olish
// console.log(map.get('name')); // "John"
// console.log(map.get(1));      // "one"

// // Kalitni tekshirish
// console.log(map.has('name')); // true
// console.log(map.has('age'));  // false

// // Kalit-qiymat juftligini o'chirish
// map.delete('name');
// console.log(map.has('name')); // false

// // Xarita hajmi
// console.log(map.size); // 2

// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });


// for (let [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }


let mapObj = new Map()

mapObj.set(123,'Abdulloh')
mapObj.set(true, "Solikhov");
mapObj.set('Yoshi','25')


// mapObj.delete(123)

// console.log(mapObj.size);


// console.log(mapObj.clear);



//1-masala

// let map = new Map();
// let arr = [1, 1, 1, 2, 3, 4, 5, 6, 6, 7];










//1-masala

// let map = new Map()

// const arr = ['Barcelona','Real','Chelsi','Nokia','Nokia']

// arr.forEach((meva) =>{
//     if(!map.has(meva)){
//         map.set(meva,1)
//     }else{
//         map.set(meva,map.get(meva)+1)
//     }
// })

// map.forEach((meva,key)=>{
//     console.log(`${key} ${meva} ta `);
    
// })

//2-masala

// let map = new Map()

// let str = 'Abdulloh'

// for(let i = 0 ; i < str.length ; i++){
//       let char = str[i];
//     if(!map.has(char)){
        
//         map.set(char,1)
//     }else{
//         map.set(char, map.get(char)+1)
//     }
// }

// map.forEach((char,count) => {
//     console.log(`${count} ${char}`);
    
// })

//3-masala

// let arr = ['name','age','color']

// let arr2 = ['Abdulloh',25,'black']

// let map = new Map()

// let result = arr.map((key,value) =>{
//     return [key,arr2[value]]
// }

// )
// console.log(result);

