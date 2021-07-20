

let nt = function () {
    console.log('NEXT TASK')
}


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomTo100 = function (len) {
    let array = []
    for (let i = 0; i < len; i++) {
        array.push(Math.round(Math.random()*100))
    }
    return array
}

console.log(randomTo100(70));

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

nt()

let randomTo = function (len, min, max) {
    let array = []
    for (let i = 0; i < len; i++) {
        array.push(Math.round(Math.random()*(max - min) + min))
    }
    return array
}

console.log(randomTo(20, 18, 35));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

nt()

let myArray_1 = randomTo(50, 0, 50)
myArray_1.sort(function (a, b) {
    return a - b
})

console.log(myArray_1);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

nt()

let myArray_2 = randomTo100(35)
myNewArray_2 = myArray_2.filter(function (number) {
    return number % 2 === 0
// myNewArray_2 = myArray_2.filter(number => number % 2 === 0) - інший запис
})

console.log(myNewArray_2);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

nt()

let myArray_3 = randomTo100(15)

let myNewArray_3 = myArray_3.map(function (number) {
    return `${number}`
})

console.log(myArray_3);
console.log(myNewArray_3);


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та
// Відсортувати його по id. по зростанню (sort)

nt()

class Friend {
    constructor(id, name, characteristic, email, phone) {
        this.id = id
        this.name = name
        this.characteristic = characteristic
        this.email = email
        this.phone = phone
    }
}

let myFriends = []

myFriends.push(new Friend(2, 'mama', 'kind', 'yourmommy@meta.ua', '050-357-72-14'))
myFriends.push(new Friend(4, 'papa', 'generous', 'yourdaddy@meta.ua', '066-487-33-49'))
myFriends.push(new Friend(2, 'Karinka', 'lovely', 'yourbride@gmail.com', '093-357-32-14'))
myFriends.push(new Friend(10, 'Slavik', 'faithful', 'yourpuple@gmail.com', '098-311-35-17'))
myFriends.push(new Friend(6, 'Alex', 'sincere', 'yourmentor@gmail.com', '068-348-36-98'))
myFriends.push(new Friend(4, 'Nelya', 'kind', 'yourpastor@gmail.com', '097-157-32-14'))
myFriends.push(new Friend(7, 'Yura', 'helpful', 'yourteamleader@gmail.com', '099-340-31-55'))
myFriends.push(new Friend(3, 'Valentin', 'patient', 'yourpan@gmail.com', '050-151-00-23'))
myFriends.push(new Friend(8, 'Rita', 'loud', 'youraunt@gmail.com', '098-447-82-14'))
myFriends.push(new Friend(1, 'Vovka', 'hardworking', 'yourfriend@gmail.com', '068-059-47-41'))

console.log(myFriends);

let filteredFriends = myFriends.filter(function (friend) {
    if (friend.id % 2 === 0) {
        return friend
    }
})

console.log(filteredFriends);

let sortedFriends = filteredFriends.sort(function (a, b) {
    return a.id - b.id
})

console.log(sortedFriends);
