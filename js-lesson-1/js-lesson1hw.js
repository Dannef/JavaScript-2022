let hello=('hello ')
// hello='bye'
let owu=('owu ')
//owu='apple'
let com=('com ')
//com='dot'
let ua=('ua ')
//ua='pl'
let a=1
//a=2
let b=10
//b=20
let c=-999
//c=9
let d=123
//d=222
let e=3.14
//e=14.3
let f=2.7
//f=7.2
let g=16
//g=39
let h=true
//h=yup
let i=false
//i=not
console.log(hello,owu,com,ua,a,b,c,d,e,f,g,h,i)
// alert(hello,owu,com,ua,a,b,c,d,e,f,g,h,i)
document.write(hello,owu,com,ua)
console.log(true)
console.log(false)
console.log(a>b)
console.log(e<g)
console.log(f===e)
console.log(b===f)
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = ('Daniel ')
let middleName = ('Eugene ')
let lastName = ('Nef')
let age = ('26y.o.')
let person = (firstName + middleName + lastName)
console.log(person)
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
prompt('Greetings what is your name?', 'Greetings Daniel Eugene, your age 26')
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let aa=100;
let bb='100'
let cc=true
console.log(typeof aa)
console.log(typeof bb)
console.log(typeof cc)
//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
let qq=5
let ww=6
let ee='123'
console.log(qq<ww)
console.log(qq>ww)
console.log(qq>=ww)
console.log(qq===ww)
console.log(b==b)
console.log(b===b)
console.log(b>b)
console.log(b<b)
console.log(b!==b)
console.log(d>ee)
console.log(d==ee)

// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); добавляет 5 к стринге 20=205
// document.write(str - a + "<br/>"); отнимает от 20 число 5=15
// document.write(str * "2" + "<br/>"); множит 20*2=40
// document.write(str / 2 + "<br/>"); делит 20/2=10
// Такая работа ДСа, к стринге добаляет новую цифру но работает с остальными функциями
