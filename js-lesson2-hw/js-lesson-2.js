//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//  (в першу, другу, третю или четверту частину години).
// let time = +prompt('enter time from 0 to 59', '')
// if (time >= 0 && time <= 15) {
//     console.log('first quarter');
// } else if (time >= 16 && time <= 29) {
//     console.log('second quarter');
// } else if (time >= 30 && time <= 44) {
//     console.log('third quarter');
// } else if (time >= 45 && time <= 59) {
//     console.log('fourth quarter');
// } else {
//     console.log('wrong number')
// }

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це чис
// ло (у першу, другу чи третю).
// let day= +prompt('enter day from 1 to 31', '')
//     if (day >=1 && day <=10){
//     console.log('first decade')
// }
//     else if (day >=11 && day <= 20){
//     console.log('second decade')
// }
//     else if (day>=21 && day<=31){
//         console.log('third decade')
//     }
//     else {
//         console.log('wrong data')}
//- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test;
// if (confirm('approved?')) {
//     test = 'correct'
// }
// else {
//     test = 'wrong'}
// console.log(test)

// let xxx= confirm('are you 18?') ? 'true':'false';
// console.log(xxx);

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//  let nr=+prompt('enter numbers 1 0 -3', '')
// if (nr !== 0){
//     console.log('correct')
// }
// else {
//     console.log('wrong')
// }
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let weekDuties= prompt('what is your weekly duties?', '')
// switch (weekDuties){
//     case 'monday':
//         console.log(gym)
//         break;
//     case 'tuesday':
//         console.log('car wash')
//         break;
//     case 'wednesday':
//         console.log('swimming pool')
//         break;
//     case 'thursday':
//         console.log('second job')
//         break;
//     case 'friday':
//         console.log('drinking time')
//         break;
//     case 'saturday':
//         console.log('home cleaning')
//     case 'sunday':
//         console.log('family time')
//         break;
//     default:
//         console.log('enter day of the week')
// }
//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let dayNr= +prompt('how many days in year?')
// if (dayNr>=1 && dayNr<=365){
//     console.log('normal year')
// }
// else if (dayNr===366) {
//     console.log('leap-year')
//
// }
// else {
//     console.log('wrong data, enter total days in year')
// }
let xxx= prompt('what official name of JS?')
if (xxx === 'ECMAScript') {
    alert('correct')
}
else { alert('dont know? ECMAScript')}