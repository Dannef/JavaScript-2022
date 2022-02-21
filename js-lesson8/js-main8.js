// -- отримує текст з параграфа з id "content"
let getContectById = document.getElementById('content')
console.log(getContectById)
// -- отримує текст з блоку з id "rules"
let getRulesById = document.getElementById('rules')
console.log(getRulesById)
// -- замініть текст параграфа з id 'content' на будь-який інший
getContectById.innerHTML = ' this text is different from htlm file '
// -- замініть текст параграфа з id 'rules' на будь-який інший
getRulesById.innerHTML = '<b> first rule of MCU is start to watch from Iron Man</b><br></br> just cheking how it works'
// -- змініть кожному елементу колір фону на червоний
// let redBack = document.body.children
// for (const redBackElement of redBack) {
//     redBackElement.style.backgroundColor = 'red'
//
// }
// -- змініть кожному елементу колір тексту на синій
// let blueColTxt = document.body.children
// for (const blueColTxtElement of blueColTxt) {
//     blueColTxtElement.style.color = 'blue'
// }
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let idRuled = document.getElementById('rules')
// console.log(idRuled.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.getElementsByClassName('fc_rules')
for (const fcRule of fcRules) {
    fcRule.style.color = 'red'
}