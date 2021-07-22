

let nt = function () {
    console.log('               ');
    console.log('NEXT TASK')
    console.log('               ');
}


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

let clients = []

clients.push(new Client(1, 'Enoh', 'Meland', 'client111@gmail.com', '099-111-11-11', [1, 2,]))
clients.push(new Client(2, 'Ruta', 'Shtefan', 'client222@gmail.com', '099-222-22-22', [1, 2, 4, 5, 6, 7]))
clients.push(new Client(3, 'Taras', 'Haitvar', 'client333@gmail.com', '099-333-33-33', [1, 2, 3]))
clients.push(new Client(4, 'Yutsa', 'Melnyk', 'client444@gmail.com', '099-444-44-44', [1, 2, 3, 4, 5, 6, 7, 8]))
clients.push(new Client(5, 'Ihor', 'Pystovidze', 'client555@gmail.com', '099-555-55-55', [1, 2, 3, 4]))
clients.push(new Client(6, 'Oleh', 'Borys', 'client666@gmail.com', '099-666-66-66', [1, 2, 3, 4, 5, 6]))
clients.push(new Client(7, 'Pasha', 'Tokar', 'client777@gmail.com', '099-777-77-77', [1, 2, 3, 4, 5]))
clients.push(new Client(8, 'Alex', 'Shevchenko', 'client888@gmail.com', '099-888-88-88', [1, 2, 3, 4, 5]))
clients.push(new Client(9, 'Sasha', 'Reva', 'client999@gmail.com', '099-999-99-99', [1, 2, 3, 4, 5, 6, 7, 8]))
clients.push(new Client(10, 'Dasha', 'Grace', 'client000@gmail.com', '099-000-00-00', [1, 2, 3, 4, 5]))

console.log(clients);

clients.sort(function (a, b) {
    return a.order.length - b.order.length
})

console.log(clients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

nt()

let car = function (brand, country, year, maxSpeed, engineVolume) {
  this.brand = brand;
  this.country = country;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineVolume = engineVolume;
  this.drive = function () {
      console.log('Ми їдемо зі швидкістю', this.maxSpeed, 'кілометрів на годину')
  };
    this.info = function () {
        console.log('Бренд:', this.brand, '- країна:', this.country, '- рік випуску:', this.year, '- максимальна швидкість:', this.maxSpeed, '- двигун:', this.engineVolume)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed
        return this.maxSpeed
    }
    this.changeYear = function (newValue) {
        this.year = this.year + newValue
        return this.year
    }

    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let car_1 = new car('Volvo', 'Sweden', 1927, 150, 3.5)

console.log(car_1);
car_1.drive()
car_1.info()
console.log(car_1.increaseMaxSpeed(35));
console.log(car_1.changeYear(20));

let myDriver = {
    name: 'David',
    age: 35,
    status: 'married',
    experience: 13
}
car_1.addDriver(myDriver)

console.log(car_1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

nt()

class Car {
    constructor(brand, country, year, maxSpeed, engineVolume) {
        this.brand = brand;
        this.country = country;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    };

    drive = function () {
        console.log('Ми їдемо зі швидкістю', this.maxSpeed, 'кілометрів на годину')
    }
    info = function () {
        console.log('Бренд:', this.brand, '- країна:', this.country, '- рік випуску:', this.year, '- максимальна швидкість:', this.maxSpeed, '- двигун:', this.engineVolume)
    }
    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed
        return this.maxSpeed
    }
    changeYear = function (newValue) {
        this.year = this.year + newValue
        return this.year
    }
    addDriver = function (driver) {
        this.driver = driver
    }
}

let car_2 = new Car('Zaz', 'Ukraine', 1863, 80, 0.6)

console.log(car_2);

car_2.drive()

car_2.info()

console.log(car_2.increaseMaxSpeed(15));

console.log(car_2.changeYear(50));

let myDriver_2 = {
    name: 'Dido',
    age: 78,
    status: 'married',
    experience: 60
}

car_2.addDriver(myDriver_2)

console.log(car_2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


nt()


class Cinderella { constructor(name, age, footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}

class Prince { constructor(name, age, shoeSize) {
        this.name = name
        this.age = age
        this.shoeSize = shoeSize
    }
}

let cinderellas = []

cinderellas.push(new Cinderella('Ella', 37, 38))
cinderellas.push(new Cinderella('Karinka', 20, 36))
cinderellas.push(new Cinderella('Dasha', 27, 39))
cinderellas.push(new Cinderella('Sonya', 19, 38))
cinderellas.push(new Cinderella('Olenka', 22, 37))
cinderellas.push(new Cinderella('Natalya', 25, 37))
cinderellas.push(new Cinderella('Sasha', 14, 34))
cinderellas.push(new Cinderella('Nelya', 82, 38))
cinderellas.push(new Cinderella('Masha', 21, 39))
cinderellas.push(new Cinderella('Marta', 19, 35))

console.log(cinderellas);

let prince = new Prince('Lyosha', 21, 36)

let myCinderella;

for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince.shoeSize) {
        myCinderella = cinderellas[i].name
    }
}

console.log(`My cinderella is ${myCinderella}`)


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


let myCinderella_obj = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize)

console.log(`My cinderella is ${myCinderella_obj.name}`)
