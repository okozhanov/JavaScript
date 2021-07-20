

let NT = 'NEXT TASK'

//     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let nums_1 = [12, 10, 15, 33, 83, 21, 29]
let nums_2 = [32, 18, 25, 39, 13, 13, 24]
let nums_3 = [15, 10, 25, 37, 33, 21, 39]
let nums_4 = [19, 11, 23, 87, 13, 21, 24]
let nums_5 = [12, 10, 25, 35, 33, 51, 25]
let nums_6 = [26, 35, 17, 29, 61, 98, 11]
let nums_7 = [73, 35, 45, 18, 54, 10, 72]

let myFunc_1 = function (n1) {
    let commonArray = []
    for (let j = 0; j < n1.length; j++) {
        let sumOfColumn = 0
        for (let i = 0; i < arguments.length; i++) {
            sumOfColumn += arguments[i][j]
        }
        commonArray.push(sumOfColumn)
    }
    return commonArray;
}

console.log(myFunc_1(nums_1, nums_2, nums_3, nums_4, nums_5, nums_6, nums_7));


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

console.log(NT);

let abc = ['a', 'b', 'c']

for (let i = 0; i < 3; i++) {
    abc.push(i+1)
}

console.log(abc);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

console.log(NT);

let arr123 = [1, 2, 3]

let reverse = function (arr) {
    arr.sort(function () {
    return -1})
    return arr
}

console.log(reverse(arr123));

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

console.log(NT);

arr123 = [1, 2, 3]
arr123.push(4, 5, 6)
console.log(arr123);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

console.log(NT);

arr123 = [1, 2, 3]
arr123.unshift(4, 5, 6)
console.log(arr123);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

console.log(NT);

let arr12345 = [1, 2, 3, 4, 5]
console.log(arr12345.slice(3, 5));

// але цей спосіб не змінює сам масив, тож можна інший, щоб масив змінився

arr12345.splice(0, 3)
console.log(arr12345);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

console.log(NT);

arr12345 = [1, 2, 3, 4, 5]
arr12345.splice(2, 3)
console.log(arr12345);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

console.log(NT);

arr12345 = [1, 2, 3, 4, 5]
arr12345.splice(3, 2, 'a', 'b', 'c')
console.log(arr12345);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

console.log(NT);

nums_2.push(34, 13, 88)

for (const number of nums_2) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

console.log(NT);

let nums_copy = []

for (let i = 0; i < nums_2.length; i++) {
    nums_copy[i] = nums_2[i]
}

console.log(nums_copy);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

console.log(NT);

abc = ['a', 'b', 'c']
let word = ''

for (let i = 0; i < abc.length; i++) {
    word += abc[i]
}

console.log(word)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

console.log(NT);

abc = ['a', 'b', 'c']
word = ''

i = 0
while (i < abc.length) {
    word += abc[i]
    i++
}

console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

console.log(NT);

abc = ['a', 'b', 'c']
word = ''

for (const letter of abc) {
    word += letter
}

console.log(word)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

console.log(NT);

let someArray = ['abc', 123, 321, 'xyz', true, false, 'iGwt']

let switching = function (arr, i) {
    let tmp = arr[i]
    arr[i] = arr[i+1]
    arr[i+1] = tmp
    return arr
}

console.log(switching(someArray, 0));
console.log(switching(someArray, 1));
console.log(switching(someArray, 2));
console.log(switching(someArray, 3));

// - Дано список імен.
//     let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '


//тут поки щось не виходить....(

let normalaizer = function (n) {
    i=0
    do {
        word = n.replaceAll('  ', ' ')
        i++
    } while (i < n.length)

    return word
}

console.log(normalaizer(n1));
console.log(n1);
