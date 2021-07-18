

let NA = 'Next array'
let NT = 'Next task'


// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [13, 6, 2000, 7, 10]
let strings = ['this', 'day', 'is', 'so', 'hot']
let mix = ['Is', 2, 'plus', 2, '=4?', true]

for (const number of numbers) {
    console.log(number)
}
console.log(NA)

for (const string of strings) {
    console.log(string)
}

console.log(NA)

for (const item of mix) {
    console.log(item)
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями
// звертаючись до конкретного індексу. Вивести в консоль

console.log(NT)

let emptyArray = []
// let arrayLength = +prompt('Скільки елементів має бути в масиві?')
arrayLength = 15

for (let i = 0; i < arrayLength; i++) {
    emptyArray[i] = arrayLength*i-i/2
}

console.log(emptyArray)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

document.write(`<h2>${NT}</h2>`)

let anyArray_1 = ['I', 'have', 'visited', 'my', 'church', 'today', 'and', 'I', 'am', 'joyful']

for (let i = 0; i < anyArray_1.length; i++) {
    document.write('<div>')
        document.write(anyArray_1[i])
    document.write('</div>')
}

document.write(`<h2>${NA}</h2>`)

for (let i = 0; i < anyArray_1.length; i++) {
    document.write('<div>')
        document.write(i + ' - ' + anyArray_1[i])
    document.write('</div>')
}

document.write(`<h2>${NA}</h2>`)

let anyArray_2 = ['I', 'have', 'visited', 'my', 'church', 'today', 'and', 'I', 'am', 'joyful', 'and', 'have', 'you', 'find', 'your', 'own', 'joy', 'and', 'peace', '?']

let i=0
while (i<anyArray_2.length) {
    document.write('<h1>')
    document.write(anyArray_2[i])
    document.write('</h1>')
    i++
}


document.write(`<h2>${NA}</h2>`)

i=0
while (i<anyArray_2.length) {
    document.write('<h1>')
    document.write(i + ' - ' + anyArray_2[i])
    document.write('</h1>')
    i++
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90, 1]

for (const number of numbers) {
    console.log(number)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

console.log(NA)

strings = ['Все', 'счастливые семьи', 'похожи', 'друг', 'на друга', 'каждая', 'несчастливая', 'семья', 'несчастлива', 'по-своему']

for (const string of strings) {
    console.log(string)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let anyArray_3 = ['Все', 'счастливые семьи', 'похожи', 'друг', 'на друга', 1, 2, 3, true, false]

console.log(NA)

for (const item of anyArray_3) {
    console.log(item)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

console.log(NA)

for (const item of anyArray_3) {
    if (typeof item === 'boolean') {
        console.log(item)
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

console.log(NA)

for (const item of anyArray_3) {
    if (typeof item === 'number') {
        console.log(item)
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

console.log(NA)

for (const item of anyArray_3) {
    if (typeof item === 'string') {
        console.log(item)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

console.log(NT)

emptyArray = []

emptyArray[0] = 'Genesis'
emptyArray[1] = true
emptyArray[2] = 12
emptyArray[3] = 'Exodus'
emptyArray[4] = 'Leviticus'
emptyArray[5] = true
emptyArray[6] = 'Numbers'
emptyArray[7] = 7
emptyArray[8] = true
emptyArray[9] = 'Deuteronomy'

for (let j = 0; j < emptyArray.length; j++) {
    const item = emptyArray[j];
    console.log(item)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log(NT)
document.write(`<h2>${NT}</h2>`)

for (i=0; i<10; i++) {
    console.log(i)
    document.write(i + ', ')
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log(NT)
document.write(`<h2>${NT}</h2>`)

for (i=0; i<100; i++) {
    console.log(i)
    document.write(i + ', ')
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

console.log(NT)
document.write(`<h2>${NT}</h2>`)

for (i=0; i<100; i += 2) {
    console.log(i)
    document.write(i + ', ')
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

console.log(NT)
document.write(`<h2>${NT}</h2>`)

for (i=0; i<100; i++) {
    if (i % 2 === 0) {
    console.log(i)
    document.write(i + ', ')
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

console.log(NT)
document.write(`<h2>${NT}</h2>`)

for (i=0; i<100; i++) {
    if (i % 2 === 1) {
        console.log(i)
        document.write(i + ', ')
    }
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

console.log(NT)

let usersWithCities = []

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
      if (usersWithId[i].id === citiesWithId[j].user_id) {
          usersWithCities.push (
              {
                  id: usersWithId[i].id,
                  name: usersWithId[i].name,
                  age: usersWithId[i].age,
                  status: usersWithId[i].status,
                  address: {
                      country: citiesWithId[j].country,
                      city: citiesWithId[j].city
                  }
              }
          )
      }
    }
}

for (const singleUser of usersWithCities) {
    console.log(singleUser)
}
