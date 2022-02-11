// - створити функцію яка обчислює та повертає площу прямокутника
// let square = (a,b)=>{
//     return a*b
// }
// console.log(square(10,10))
// document.write('rectange square='+square(10,10)+ ' mm')
// - створити функцію яка обчислює та повертає площу круга
// let circle=(r)=> {
// let radius=r**2
//     let square=3.14*radius
//     return square
// }
// console.log(circle(20))
// document.write('Circle radius is equal - '+ circle(20))
//- створити функцію яка приймає масив та виводить кожен його елемент
// let arr=['in ', 2019, ' has ', 'started ', ' covid-', 19, ' disease']
// let dataOfArr=(arr)=>{
//     for (i=0; i<arr.length; i++){
//         console.log(arr[i])
//         document.write(arr[i])
//     }
// }
// dataOfArr(arr);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragTxt=(text)=>{
//     document.write(`<p>${text}</p>`)
// }
//
// paragTxt('dummy text')
//  - створити функцію яка створює ul( з трьома елементами li. Текст li задати через аргумент всім однаковий
// let liCreator=(text)=>{
//     document.write(`<ol>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ol>`)
//     for (let i=1; i<=15; i++){
//         document.write(`<li>${i}. ${text}</li>`)
//     }
// }
// liCreator('okten')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let liCreator=(a,b)=>{
//     document.write(`<ul>`)
//     for (let i=0; i<=b; i++){
//         document.write(`<li>${a}</li>`)
//     }
//         document.write(`</ul>`)
// }
// liCreator('dummy text', 2)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr= [1,'okten', false, 4, 'good']
// let dataOfArr=()=>{
//     document.write(`<ol>`)
//     for (let i=0; i<arr.length; i++){
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// dataOfArr(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr=[{id:1, name:'Eugene', age:49}, {id:2, name: 'Maria', age: 19}, {id:3, name: 'Boris', age: 74}]
// let dataOfArr=()=>{
//     for (let arrElement of arr) {
//         document.write(`<p>${arrElement.id}. ${arrElement.name} ${arrElement.age}</p>`)
//
//     }
// }
// dataOfArr(arr)
// тут аргумент () можна ничего не вписывать, а сразу обращаться к массиву?
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min=(first, second, third)=>{
//     if (first<second && first<third){
//         document.write(first)
//     }
//     else if (second<third && second<first){
//         document.write(second)
//     }
//     else {document.write(third)}
// }
// min(100, 20,300)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max=(one, two, three)=>{
//     if (one>two && one>three){
//         document.write(one)
//     }
//     else if (two>one && two>three){
//         document.write(two)
//     }
//     else {document.write(three)}
// }
// max(302, 432,123)
