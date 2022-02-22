// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let divCreation = document.createElement('div')
// divCreation.classList.add('wrap')
// divCreation.classList.add('collapse')
// divCreation.classList.add('alpha')
// divCreation.classList.add('beta')
// divCreation.style.color = 'red'
// divCreation.style.backgroundColor = 'peppermint'
// divCreation.style.fontSize = '20px'
// document.body.append(divCreation)
// let clone = divCreation.cloneNode(true)
// document.body.append(clone)
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let arr = ['Main','Products','About us','Contacts']
// let xxx = document.getElementsByClassName('menu')[1]
// for (const arrItems of arr) {
//     let li = document.createElement('li')
//     li.innerText = arrItems
//     xxx.append(li)
// }
// xxx.style.color = 'darkgreen'
// xxx.style.background= 'red'
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const element of coursesAndDurationArray) {
//     let divElCreation = document.createElement('div')
//     divElCreation.innerText = `${element.title}, ${element.monthDuration}`
//     document.body.append(divElCreation)
// }
// let cinderellaArray = [
//     {Cinderella:'Dasha', age: 18,  footsize: 41},
//     {Cinderella:'Masha', age:15, footsize:37},
//     {Cinderella:'Nastia', age:24,footsize: 38},
//     {Cinderella:'Katia', age:25, footsize:40},
//
// ]
// for (const type of cinderellaArray) {
//     let parCreator = document.createElement('p')
//     parCreator.innerText = `${type.Cinderella}, ${type.age}, ${type.footsize}`
//     document.body.append(parCreator)
//     parCreator.style.color = 'red'
// }
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// for (const elements of coursesAndDurationArray) {
//     let item = document.createElement('div')
//     let heading = document.createElement('h1')
//     let description = document.createElement('p')
//     heading.innerText = `${elements.title}`
//     description.innerText = `${elements.monthDuration}`
//
//     item.append(heading)
//     item.append(description)
//     document.body.append(item)
// }
// let cinderellaArray = [
//     {Cinderella:'Dasha', age: 18,  footsize: 41},
//     {Cinderella:'Masha', age:15, footsize:37},
//     {Cinderella:'Nastia', age:24,footsize: 38},
//     {Cinderella:'Katia', age:25, footsize:40},
// ]
// for (const ellementsOfArray of cinderellaArray) {
//     let divElements = document.createElement('div')
//     let headerPart = document.createElement('h3')
//
//     divElements.innerText = `${ellementsOfArray.Cinderella}`
//     headerPart.innerText = `she is ${ellementsOfArray.age} and her foot is ${ellementsOfArray.footsize}`
//
//     divElements.append(headerPart)
//     document.body.append(divElements)
// }
// let color = document.getElementsByTagName('div')[3]
// color.style.color = 'red'