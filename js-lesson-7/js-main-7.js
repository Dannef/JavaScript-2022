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
let arr = [
    new User(1, 'Vitalii', 'Mykolenko', 'Everton', 22),
    new User(2, 'Andrii', 'Yarmolenko', 'West Ham', 28),
    new User(3, 'Oleksandr', 'Zinchenko', 'Man City', 25),
    new User(4, 'Evhenii', 'Konoplyanka', 'Cracovia', 29),
    new User(5, 'Serhio', 'Ramos', 'PSG', 32),
    new User(6, 'Cristiano', 'Ronaldo', 'Man United', 35),
    new User(7, 'Marcus', 'Rashford', 'Man United', 21),
    new User(8, 'Marco', 'Reus', 'Borussia', 29),
    new User(9, 'Toni', 'Kroos', 'RMA', 31),
    new User(10, 'David', 'DeXea', 'Man United', 28)
]
function User (id, name, surname, FC, age){
    this.id=id,
        this.name=name,
        this.surname=surname,
        this.fc=FC,
        this.age=age
}

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
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
//створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let arrClient = [
    new Client(121, 'Max', 'Verstappen', 'max.v@gmail.com', 380674569922, ['pizza', 'pasta', 'soup', 'burger']),
    new Client(232, 'Fernando', 'Alonso', 'f.alof1@gmail.com', 380934218854, ['ravioli', 'sandwich', 'humus','mortadella']),
    new Client(432, 'Serhio', 'Perez', 's.perez@mx.com', 380968881314, ['tekila', 'vodka', 'gin', 'whiskey']),
    new Client(312, 'Michael', 'Schumacher', 'schuma@de.com', 48013203443, ['wurst', 'pussy']),
    new Client(132, 'Vasya', 'Pupkin', 'pup@de.com', 2365788222, ['wurst', 'beer', 'kebab', 'pussy']),
    new Client(434, 'Petya', 'Ivanov', 'iva@de.com', 55234535623, ['wurst', 'pussy']),
    new Client(542, 'Seryi', 'Deshchica', 'faaack@de.com', 21432543346, ['pussy']),
    new Client(753, 'Danila', 'Bagrov', 'brat@de.com', 124142353, ['wurst', 'beer', 'pussy']),
    new Client(332, 'Den', 'Telega', 'zavv@de.com', 4364685684, ['wurst']),
    new Client(742, 'Igor', 'Dart', 'lanos@de.com', 13535475666, ['wurst', 'beer', 'kebab']),
]
// console.log(arrClient)
// console.log(arrClient.sort((a,b)=> a.order.length - b.order.length))
// console.log(arrClient.sort((a,b)=> a.id - b.id))