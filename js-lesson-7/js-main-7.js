// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id, name, surname, email, phone){
//     this.id=id,
//     this.name=name,
//     this.surname=surname,
//     this.email=email,
//     this.phone=phone
// }
// let userCounter = new User(1, 'Dan','Nef', 'daniel.nef96@gmail.com', '80636870524')
// console.log(userCounter)
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let arr = [
//     new User(1, 'Vitalii', 'Mykolenko', 'Everton', 22),
//     new User(2, 'Andrii', 'Yarmolenko', 'West Ham', 28),
//     new User(3, 'Oleksandr', 'Zinchenko', 'Man City', 25),
//     new User(4, 'Evhenii', 'Konoplyanka', 'Cracovia', 29),
//     new User(5, 'Serhio', 'Ramos', 'PSG', 32),
//     new User(6, 'Cristiano', 'Ronaldo', 'Man United', 35),
//     new User(7, 'Marcus', 'Rashford', 'Man United', 21),
//     new User(8, 'Marco', 'Reus', 'Borussia', 29),
//     new User(9, 'Toni', 'Kroos', 'RMA', 31),
//     new User(10, 'David', 'DeXea', 'Man United', 28)
// ]
// function User (id, name, surname, FC, age){
//     this.id=id,
//         this.name=name,
//         this.surname=surname,
//         this.fc=FC,
//         this.age=age
// }

// console.log(arr)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter= arr.filter((id) =>{
//     if (id.id % 2===0){
//         return id
//     }
// })
// console.log(filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(arr.sort((a,b)=> a.age - b.age)) сделал с age так как id и так по возрастанию
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let arrClient = [
//     new Client(121, 'Max', 'Verstappen', 'max.v@gmail.com', 380674569922, ['pizza', 'pasta', 'soup', 'burger']),
//     new Client(232, 'Fernando', 'Alonso', 'f.alof1@gmail.com', 380934218854, ['ravioli', 'sandwich', 'humus','mortadella']),
//     new Client(432, 'Serhio', 'Perez', 's.perez@mx.com', 380968881314, ['tekila', 'vodka', 'gin', 'whiskey']),
//     new Client(312, 'Michael', 'Schumacher', 'schuma@de.com', 48013203443, ['wurst', 'pussy']),
//     new Client(132, 'Vasya', 'Pupkin', 'pup@de.com', 2365788222, ['wurst', 'beer', 'kebab', 'pussy']),
//     new Client(434, 'Petya', 'Ivanov', 'iva@de.com', 55234535623, ['wurst', 'pussy']),
//     new Client(542, 'Seryi', 'Deshchica', 'faaack@de.com', 21432543346, ['pussy']),
//     new Client(753, 'Danila', 'Bagrov', 'brat@de.com', 124142353, ['wurst', 'beer', 'pussy']),
//     new Client(332, 'Den', 'Telega', 'zavv@de.com', 4364685684, ['wurst']),
//     new Client(742, 'Igor', 'Dart', 'lanos@de.com', 13535475666, ['wurst', 'beer', 'kebab']),
// ]
// console.log(arrClient)
// console.log(arrClient.sort((a,b)=> a.order.length - b.order.length))
// console.log(arrClient.sort((a,b)=> a.id - b.id))
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, manufactorer, year, maxspeed, engine){
//     this.model=model,
//         this.manufactorer=manufactorer,
//         this.year=year,
//         this.maxspeed=maxspeed,
//         this.engine=engine,
//         this.drive= function (){
//             console.log(`we are going with ${maxspeed} at hour`)
//         }
//         this.info = function (){
//             console.log(`Model - ${model}`)
//             console.log(`Manufactorer - ${manufactorer}`)
//             console.log(`Year - ${year}`)
//             console.log(`Max Speed - ${maxspeed}`)
//             console.log(`Engine - ${engine}`)
//         }
//         this.increaseMaxSpeed = function (newSpeed){
//         this.maxspeed=this.maxspeed + newSpeed
//         }
//         this.changeYear = function (newValue){
//         this.year=this.year + newValue
//         }
//         this.addDriver = function (driver){
//         this.driver=driver
//         }
// }
// let car= new Car('Nissan GTR', 'Japan',1999, 250, 'RB26 - 2.6')
// console.log(car)
// car.drive()
// car.info()
// car.increaseMaxSpeed(35)
// car.changeYear(4)
// car.addDriver('Dan')
// - (Те саме, тільки через клас)

// class Car2 {
//     constructor(model, manufactorer, year, maxSpeed, engine) {
//         this.model = model;
//         this.manufactorer = manufactorer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log(`we are going ${this.maxSpeed} at hour`)
//     }
//     info(){
//         console.log(`Model - ${this.model}`)
//         console.log(`Manufactorer - ${this.manufactorer}`)
//         console.log(`Year - ${this.year}`)
//         console.log(`Max Speed - ${this.maxspeed}`)
//         console.log(`Engine - ${this.engine}`)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed=this.maxSpeed + newSpeed
//     }
//     changeYear (newYear){
//         this.year=this.year + newYear
//     }
//     addDriver (driver){
//         this.driver=driver
//     }
// }
// let car = new Car2('BMW', 'Germany', 2020, 250, 'M340i')
// console.log(car)
// car.drive()
// car.info()
// car.increaseMaxSpeed(50)
// car.changeYear(1)
// car.addDriver('Dan')
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
let cinderellaArray = [
    new Cinderella('Dasha', 18, 41),
    new Cinderella('Masha', 15, 37),
    new Cinderella('Nastia', 24, 38),
    new Cinderella('Katia', 25, 40),
    new Cinderella('Sonia', 23, 37),
    new Cinderella('Lera', 27, 40),
    new Cinderella('Ira', 17, 37),
    new Cinderella('Valia', 23, 39),
    new Cinderella('Ania', 25, 38),
    new Cinderella('Olia', 23, 38),
]
console.log(cinderellaArray)
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('Oleh', 23, 38)
// let match= (cinderellaArray, prince)=> {
//     for (let cinderellaArrayElement of cinderellaArray) {
//         if (cinderellaArrayElement.age === prince.age ){
//             return `your princess is ${cinderellaArrayElement.name}`
//         }
//
//     }
// }
// console.log(match(cinderellaArray,prince))
// let perfectMatch= (cinderellaArray, prince)=>{
//     for (let cinderella of cinderellaArray) {
//         if (cinderella.footsize === prince.shoe)
//
//         if (cinderella.age === prince.age)
//             return `your cidrella is ${cinderella.name}`
//     }
// }
// console.log(perfectMatch(cinderellaArray,prince))
let paraGoda= cinderellaArray.find((size)=> size.footsize === prince.shoe)
console.log(paraGoda)