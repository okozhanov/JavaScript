
let nt = function () {
    console.log('          ');
    console.log('NEXT TASK');
    console.log('          ');
}

// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let idMainHeader = document.getElementById('main_header')

idMainHeader.style.color = '#062021'

// b) робить шириниу елементу ul 400px

let ulTag = document.getElementsByTagName('ul')

ulTag[0].style.width = '400px'
ulTag[0].style.background = 'silver'  // це для перевірки, щоб було видно блок

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let classLinkList = document.getElementsByClassName('linkList')

for (const classLinkListElement of classLinkList) {
    classLinkListElement.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2

let classListElement2 = document.getElementsByClassName('listElement2')

console.log(classListElement2[0].textContent);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liTag = document.getElementsByTagName('li')

for (const liTagElement of liTag) {
    liTagElement.style.background = '#999999'
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let aTag = document.getElementsByTagName('a')

for (const aTagElement of aTag) {
    aTagElement.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (const aTagElement of aTag) {
    if (aTagElement.textContent === 'link3') {
        aTagElement.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const aTagElement of aTag) {
    aTagElement.classList.add(aTagElement.textContent)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let classSub_header = document.getElementsByClassName('sub-header')

let color;

for (let i = 0; i < classSub_header.length; i++) {
    color = prompt(`Введіть колір фону для ${i+1}-го блоку (якщо цифрами, то починати з #)`)

    classSub_header[i].style.background = color
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

for (let i = 0; i < classSub_header.length; i++) {
    if (classSub_header[i].textContent === 'content 2 segment') {
        color = prompt(`Введіть колір тексту для ${i+1}-го блоку (якщо цифрами, то починати з #)`)

        classSub_header[i].style.color = color
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let classContent_1 = document.getElementsByClassName('content_1')

let text = prompt('Введіть довільний текст')

classContent_1[0].innerText = text

// l) отримати елементи p та змінити їм padding на 20px

let pTag = document.getElementsByTagName('p')

for (const pTagElement of pTag) {
    pTagElement.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let classText2 = document.getElementsByClassName('text2')

classText2[0].innerText = 'full June 2021'