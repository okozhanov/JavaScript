

let NT = 'NEXT TASK'

// - створити функцію яка приймає масив та виводить його

let randomItems = ['I', 'choose', 'joy', 'let', 'it', 'move', 'you', 3, 2, 1, true]

let displayArray = function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

displayArray(randomItems)

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

console.log(NT);

let a = 21
let b = 19
let c = 24

let minNumber = function (n1, n2, n3) {
    let min = n1
    if (min > n2) {
        min = n2
    } else if (
        min > n3) {
        min = n3
    }
    return min
}

console.log(minNumber(a, b, c));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

console.log(NT);

let x = 82
let y = 55
let z = 26

let maxNumber = function (n1, n2, n3) {
    let max = n1
    if (max < n2) {
        max = n2
    } else if (
        max < n3) {
        max = n3
    }
    return max
}

console.log(maxNumber(x, y, z));

// - створити функцію яка повертає найбільше число з масиву

console.log(NT);

let numbers = [21, 25, 48, 12, 35, 51, 33, 45, 78, 15, 135]

let maxNumberOfArray = function (arr) {
    arr.sort(function (a, b) {
        return a - b
    })
    return(arr[arr.length - 1])
}

console.log(maxNumberOfArray(numbers));

// - створити функцію яка повертає найменьше число з масиву

console.log(NT);

let minNumberOfArray = function (arr) {
    arr.sort(function (a, b) {
        return a - b
    })
    return(arr[0])
}

console.log(minNumberOfArray(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

console.log(NT);

let sumArray = function (arr) {
    let sum = 0
    for (const arrElement of arr) {
        sum += arrElement
    }
    return sum
}

console.log(sumArray(numbers));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

console.log(NT);

let avgArray = function (arr) {
    let sum = 0
    for (const arrElement of arr) {
        sum += arrElement
    }
    return (Math.round(sum / arr.length))
}

console.log(avgArray(numbers));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.

console.log(NT);

let myRandom = [];
count = 35

let randomArray = function (arr, iters) {
    for (let i = 0; i < iters; i++) {
        let rn = Math.round(Math.random()*100)
        arr.push(rn)
    }
    return arr
}

console.log(randomArray(myRandom, count));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

console.log(NT);

let books = [
    {id: 1, title: 'Буття', author: 'Мойсей', book: 'Біблія',
        description: 'Книга про те, як почалася історія світу, і люди відразу відвернулися від Бога'},
    {id: 2, title: 'Вихід', author: 'Мойсей', book: 'Біблія',
        description: 'Розповідає історію про те, як ізраїльтяни вийшли з єгипетського рабства до обіцяної їм землі'},
    {id: 4, title: 'Числа', author: 'Мойсей', book: 'Біблія',
        description: 'Книга розповідає про сорокарічні блукання ізраїльтян пустелею, їх недовіру Богу та невміння бути задоволеним'},
    {id: 21, title: 'Ісаї', author: 'Ісая', book: 'Біблія',
        description: 'Книга про те, як пророк Ісая докоряв ізраїлским лідерам у їх непослуху Богові'},
    {id: 46, title: 'Євангеліє від Луки', author: 'Лука', book: 'Біблія',
        description: 'Історія про життя, смерть та воскрсіння Ісуса Христа, і що це означає для людей'},
    {id: 54, title: 'Послання до галатів', author: 'Павло', book: 'Біблія',
        description: 'Лист Павла до галатійських церков із корисним повчанням'}
]

let arrayOfKeys = []

let keys = function (obj) {
    for (const objElement of obj) {
        arrayOfKeys.push(Object.keys(objElement))
    }
    return arrayOfKeys
}

console.log(keys(books));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

console.log(NT);

let arrayOfValues = []

let values = function (obj) {
    for (const objElement of obj) {
        arrayOfValues.push(Object.values(objElement))
    }
    return arrayOfValues
}

console.log(values(books));