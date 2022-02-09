// - створити функцію яка обчислює та повертає площу прямокутника
// function rectangle() {
//     let a=20
//     let b=20
//     let c=a*b
//     return c;
// }
// let area=rectangle()
// console.log(area)
// - створити функцію яка обчислює та повертає площу круга
// function circle(rad){
//     let radius = rad**2
//     let square = 3.14 * radius
//     return square;
// }
//
// console.log(circle(20))
//- створити функцію яка приймає масив та виводить кожен його елемент
// let arr=['in ', 2019, ' has ', 'started ', ' covid-', 19, ' disease']
// function msgArr(arr){
//     for (let i=0; i<arr.length; i++){
//         document.write(arr[i])
//         console.log(arr[i])
//     }
// }
// msgArr(arr)
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function txt(parTxt){
//     document.write(`<p>${parTxt}</p>`)
// }
// txt('some words')
//  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function liCreation (a, b, c){
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${b}</li>`)
//     document.write(`<li>${c}</li>`)
//     document.write(`</ul>`)
// }
// liCreation('okten')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liCreation(a, b){
//     document.write(`<ul>`)
//     for (let i=0; i<b; i++){
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
// liCreation('some text', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr= [1,'okten', false, 4, 'good']
// function arrCreation(array){
//     document.write(`<ul>`)
//     for (let i=0; i<arr.length; i++){
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arrCreation(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr=[{id:1, name:'Oleh', age:65}, {id:2, name:'Andrii', age:40}, {id:3, name:'Sasha',age:27}]
// function arrCreation(array){
//     for (let arrayElement of array) {
//         document.write(`<p> ${arrayElement.id}. ${arrayElement.name}- ${arrayElement.age}</p>`)
//     }
// }
// arrCreation(arr)

//то что успел с класворка сделать
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numbers(a, b,c){
//     if (a<b && a<c){
//         console.log(a);
//     }
//     else if (b<c && b<a){
//         console.log(b)
//     }
//     else {
//         console.log(c)
//     }
// }
// numbers(500, 400, 600)
// function numbersMax(first, second,third){
//     if (first>second && first>third){
//         console.log(first)
//     }
//     else if (second>third && second>first ){
//         console.log(second)
//     }
//     else {
//         console.log(third)
//     }
// }
// numbersMax(600, 1000,400)