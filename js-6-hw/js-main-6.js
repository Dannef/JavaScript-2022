// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a= 'hello world'
// console.log(a.length)
// let b= 'lorem ipsum'
// console.log(b.length)
// let c = 'javascript is cool'
// console.log(c.length)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world'
// let upper=a.toUpperCase();
// console.log(upper)
// let b = 'lorem ipsum'
// let upperB=b.toUpperCase();
// console.log(upperB);
// let c= 'javascript is cool'
// let upperC= c.toUpperCase();
// console.log(upperC);
// let lowerCaseA= upper.toLowerCase();
// console.log(lowerCaseA)
// let lowerCaseB= upperB.toLowerCase();
// console.log(lowerCaseB);
// let lowerCaseC = upperC.toLowerCase();
// console.log(lowerCaseC);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.replaceAll(' ', ''))
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str)
// console.log(arr)
// document.writeln(arr)
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
// let delete_charactrers = (str, index)=>{
//     return str.substr(0,index)
// }
// let str = 'Каждый охотник желает знать';
// document.write(delete_charactrers(str,7))
//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_Dash = (str)=>{
//     let joinupper = str.split(' ').join('-').toUpperCase()
//     return joinupper
// }
// let at = 'HTML JavaScript PHP'
// console.log(insert_Dash(at))
// document.write(insert_Dash(at))
//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let upper = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// };
// document.write(upper('how are you'));
// console.log(upper('how are you'));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str)=>{
//     return str.split(' ').map(words=>words.charAt(0).toUpperCase()+words.slice(1)).join(' ')
// }
// let txt = 'hi its your dummy text'
// document.write(capitalize(txt))
// console.log(capitalize(txt))
