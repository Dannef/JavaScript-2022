//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numbers=[11, 22, 33, 44, 55]
// let str=['one', 'two', 'three', 'four', 'five']
// let common=[88, true, false, 'first', 'second']
// console.log(numbers)
// console.log(str)
// console.log(common)
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr=[]
// arr[0] = 'Kyiv '
// arr[1] = 'is '
// arr [2]= 'the '
// arr [3]= 'capital '
// arr [4]= 'of '
// arr [5]= 'Ukraine '
// console.log(arr)
// alert(arr)
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let txt = ['dummy text']
// for (let index=0; index < 10; index++){
//     document.write(`<div>dummy text</div>`)
// }
//     - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//     for (let index=1; index<11; index++){
//         document.write(`<div>${index}. dummy text</div>`)
// }
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let a=0
// while (a<20){
//     document.write(`<div><h1> dummy text</h1></div>`);
//     a++
// }
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// while (a<20){
//     document.write(`<div><h1>${a}. dummy text</h1></div>`);
//     a++
// }
//     - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі
// let numbersArr=[11, 22, 33, 44, 55,66,77,88,99,101]
// for (let i=0; i<numbersArr.length; i++){
//     console.log(numbersArr[i])
// }
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let txtArr=['one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 'ten']
// for (let i=0; i<txtArr.length; i++){
//     console.log(txtArr[i])
// }
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let Arr=[true, 'iphone', 14, 'realize', 'is', 'on', 30, 'of', 'september', false]
// for (let i=0; i<Arr.length; i++){
//     console.log(Arr[i])
// }/     - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
let Arr = [true, 'iphone', 14, 'realize', 'is', 'on', 30, 'of', 'september', false]
// for (let i=0; i<Arr.length; i++){
//     if (typeof Arr[i]==="boolean")
//     console.log(Arr[i])
// }
//     - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let i=0; i<Arr.length; i++){
//     if (typeof Arr[i]==="number")
//         console.log(Arr[i])
// }
//     - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (let i=0; i<Arr.length; i++){
//     if (typeof Arr[i]==="string")
//         console.log(Arr[i])
// }
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr=[]
// arr[0] = 'Kyiv '
// arr[1] = 'is '
// arr [2]= 'the '
// arr [3]= 'capital '
// arr [4]= 'of '
// arr [5]= 'Ukraine '
// arr [6]= 988
// arr [7]= true
// arr [8]= 'or'
// arr [9]= false
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }
//     - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i + ' 1' );
//     document.write(' ' + i + '-sdfd.',);
// }
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<100; i++){
//     console.log(i + ' abc')
//     document.write(' '+ i+ '.usd' )
// }
//     - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<100; i += 2){
//     console.log(i+ ' abc')
//     document.write(' '+i+'second')
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0; i<100; i++){
//     if (i %2 === 0) {
//         document.write(`<p>${i} dummy</p>`)
//     console.log(i+ '.dummy')}
// }
//     - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=0; i<100; i++){
//     if (i % 2!==0){
//         console.log(i+ '.dummy')
//         document.write(`<p>${i} dummy</p>`)
//
//     }
// }
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arr=[2,17,13,6,22,31,45,66,100,-18];
//1. while
// let i=0
// while (i<arr.length){
//     console.log(arr[i])
//     i++
// }
//2.for
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
//3.while,odd
// let i=0;
// while (i<arr.length){
//     if (i %2!==0){
//         console.log(arr[i])
//     }
//     i++
// }
//4. for,odd
// for (let i=0; i<arr.length; i++){
//     if (i%2!==0){
//         console.log(arr[i])
//     }
// }
//5.while.even
// let i=0
// while (i<arr.length){
//     if (i%2 ===0){
//         console.log(arr[i])
//     }
//     i++
// }
//6. for,even
// for (let i=0; i<arr.length; i++){
//     if (i%2 === 0){
//         console.log(arr[i])
//     }
// }
//7.change - okten
// for (i=0; i<arr.length; i++){
//     if (i%3 ===0){
//        arr[i]='okten'
//     }
//     console.log(arr[i])
// }
// 8. revers
// for (let i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
// }
//9. revers for 1-8
// for (let i=arr.length-1; i>=0; i--){
//     console.log(arr[i])}
// for (let i=arr.length-1; i>=0; i--){
//     if (i%2!==0){
//         console.log(arr[i])
//     }
// }
// for (let i=arr.length-1; i>=0; i--){
//     if (i%2===0){
//         console.log(arr[i])
//     }
// }
