
let nt = function () {
    console.log('    ')
    console.log('NEXT TASK')
    console.log('    ')
}

//- Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

let formForName = document.forms.formForName

let submit = formForName.submit;
let name = formForName.name;

submit.onclick = function () {
    localStorage.setItem('name', name.value)
}


//     - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


let formStore = document.forms.formForStore
let name_prod = formStore.name_prod
let number_prod = formStore.number_prod
let price_prod = formStore.price_prod
let image_prod = formStore.image_prod
let submit_prod = formStore.submit_prod

let product;

let i;
submit_prod.onclick = function () {
    product = {
        name: name_prod.value,
        number: number_prod.value,
        price: price_prod.value,
        image: image_prod.value
    }
    localStorage.setItem(name_prod.value, JSON.stringify(product))
}


//     - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

let addresses = []
for (const user of users) {
    addresses.push(user.address)
}

console.log(addresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

for (const user of users) {
    let userBlock = document.createElement('div')

    userBlock.style.background = 'silver'
    userBlock.style.width = '60%'
    userBlock.style.margin = '20px auto'
    userBlock.style.padding = '25px'

    userBlock.innerHTML = `
    name - ${user.name};
    age - ${user.age};
    status - ${user.status};
    address - ${user.address.country}, ${user.address.city}, ${user.address.street} street, ${user.address.houseNumber}.`

    document.body.appendChild(userBlock)
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (const user of users) {
    let userBlock = document.createElement('div')

    userBlock.style.background = '#ffabab'
    userBlock.style.width = '60%'
    userBlock.style.margin = '20px auto'
    userBlock.style.padding = '25px'

    let name = document.createElement('div')
    let age = document.createElement('div')
    let status = document.createElement('div')
    let address = document.createElement('div')

    name.innerHTML = `name - ${user.name};`
    age.innerHTML = `age - ${user.age};`
    status.innerHTML = `status - ${user.status};`
    address.innerHTML = `address - ${user.address.country}, ${user.address.city}, ${user.address.street} street, ${user.address.houseNumber}.`

    userBlock.appendChild(name)
    userBlock.appendChild(age)
    userBlock.appendChild(status)
    userBlock.appendChild(address)

    document.body.appendChild(userBlock)
}


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


for (const user of users) {
    let userBlock = document.createElement('div')

    userBlock.style.background = '#b1ff93'
    userBlock.style.width = '60%'
    userBlock.style.margin = '20px auto'
    userBlock.style.padding = '25px'

    let name = document.createElement('div')
    let age = document.createElement('div')
    let status = document.createElement('div')
    let address = document.createElement('div')

    name.innerHTML = `name - ${user.name};`
    age.innerHTML = `age - ${user.age};`
    status.innerHTML = `status - ${user.status};`

    let city = document.createElement('div')
    let country = document.createElement('div')
    let street = document.createElement('div')
    let houseNumber = document.createElement('div')

    city.innerHTML = `<br>address:<br>city - ${user.address.city}`
    country.innerHTML = `country - ${user.address.country}`
    street.innerHTML = `street - ${user.address.street}`
    houseNumber.innerHTML = `house - ${user.address.houseNumber}`

    address.appendChild(country)
    address.appendChild(city)
    address.appendChild(street)
    address.appendChild(houseNumber)

    userBlock.appendChild(name)
    userBlock.appendChild(age)
    userBlock.appendChild(status)
    userBlock.appendChild(address)

    document.body.appendChild(userBlock)
}


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

    document.write('<h4 style="font-size: 22px; margin: 55px"><a href="rules.html">Перейти до сторінки з правилами</a></h4>')

    // -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
    // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
    // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let wrap = document.createElement('div')
wrap.setAttribute('id', 'wrap')
i = 0

for (const rule of rules) {
    let block = document.createElement('div')
    block.classList.add('rules')
    block.classList.add(`rule${i}`)

    let title = document.createElement('h2')
    let body = document.createElement('p')

    title.innerHTML = rule.title
    body.innerHTML = rule.body

    block.appendChild(title)
    block.appendChild(body)

    wrap.appendChild(block)
    i++
}

document.body.appendChild(wrap)