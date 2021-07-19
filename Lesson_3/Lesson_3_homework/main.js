

let NT = 'NEXT TASK'

// - створити функцію яка обчислює та повертає площу прямокутника висотою

function square  (a) {
    return a ** 2
}

                                    // let side = prompt('Введіть сторону квадрата')
let side = 5
console.log(square(side))

// - створити функцію яка обчислює та повертає площу кола

console.log(NT)

let roundSq = function (r) {
    return Math.PI * r ** 2
}

                                    // let radius = prompt('Введіть радіус кола')
let radius = 5
let S = Math.round(roundSq(radius))

console.log(`Площа кола = ${S} см кв`)

// - створити функцію яка обчислює та повертає площу циліндру

console.log(NT)

let cylinder = function (r, h) {
    return (2 * Math.PI * r * h) + 2 * (Math.PI * r ** 2)
}

radius = 4
let height = 12
S = Math.round(cylinder(radius, height))

console.log(`Площа поверхні циліндра = ${S} см кв`)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

console.log(NT)

let array = []
let howMany = +prompt('Скільки чисел ви хочете ввести?')

for (let i = 0; i < howMany; i++) {
        array[i] = +prompt(`Введіть значення для ${i+1}-го числа`)
}

let myFunc = function (a) {
    let maxNum = a[0]
    let minNum = a[0]

    for (let i = 0; i < a.length - 1; i++) {
        if (maxNum < a[i + 1]) {
            maxNum = a[i + 1]
        }

        if (minNum > a[i + 1]) {
            minNum = a[i + 1]
        }
    }

    return (`Найбільше: ${maxNum}, найменше: ${minNum}`)

}

console.log(myFunc(array));

// інший спосіб

let myFunc_2 = function (array) {
    array.sort(function (a, b) {
        return a - b
    })
    let maxNum = array[array.length-1]
    let minNum = array[0]
    return (`Найбільше: ${maxNum}, найменше: ${minNum}`)
}

console.log(myFunc_2(array))


// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

document.write(`<h3>${NT}</h3>`)

let text_1 = function (text) {
    document.write(`<p>
        ${text}
    </p>`)
}

let a = 'Please write any text here'

text_1(a)


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write(`<h3>${NT}</h3>`)

let text_2 = function (text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}

let b = 'Please and here write something'

text_2(b)


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write(`<h3>${NT}</h3>`)

let text_3 = function (text, count) {
    document.write('<ul>')
    for (let i = 0; i < count; i++) {
            document.write(`<li>${text}</li>`)
        }
    document.write('</ul>')
    }

let c = 7
let d = 'Random text'

text_3(d, c)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write(`<h3>${NT}</h3>`)

let text_4 = function (array) {
    document.write('<ul>')
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write('</ul>')
}

let count = +prompt('Скільки елементів ви хочете мати в масиві?')
let myArray = []

for (let i = 0; i < count; i++) {
    myArray[i] = prompt(`Введіть значення для ${i+1}-го елемента масиву`)
}

text_4(myArray)


