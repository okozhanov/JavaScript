//      Мій розклад (правильний порядок для звірки):
//      1. Встати з ліжка
//      2. Вмитися
//      3. Прокинутся
//      4. Почитати Біблію
//      5. Поснідати
//      6. Розібратися зі справами в Телеграмі
//      7. Прослухати лекції
//      8. Виконати домашні завдання
//      9. Зустрітися з дівчиною
//      10. Розібратися з підготовкою, подзвонити / написати людям
//      11. Поговорити з рідними по телефону
//      12. Допомогати дітям з нашої церкви
//      ..........


function start(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('На годиннику', time);

            if (time > 8) {
                console.warn('Проспав!!')
                reject('Ранок пішов не по розкладу')
            } else {
                resolve('Час покидати своє ліжко!')
            }

        }, 1500)
    })
}

function washFace(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Час освіжитися');

            if (duration < 2) {
                reject('Не прокинешся!')
            } else {
                resolve('Нарешті вмилися!')
            }
        }, 300)
    })
}

function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ми прокинулися...')
        }, 1800)
    })
}

function readTheBible(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (status) {
                resolve('Підкріпилися духовною їжею')
            } else {
                reject('No Bible no breakfast')
            }
        }, 500)
    })
}

function breakfast(eggsNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Смачного');
            if (eggsNumber < 3) {
                reject('Будеш голодний....')
            } else {
                resolve(`Ми з'їли ${eggsNumber} яєць`)
            }
        }, 800)
    })
}

function telegram() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Нових повідомлень немає')
        }, 1500)
    })
}

function lections(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (status) {
                resolve('Є над чим подумати...')
            } else {
                reject('Лінюх! Не хочеш вчитися')
            }

        }, 2500)
    })
}

function homweork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Домашка done!')
        }, 200)
    })
}

function girl() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Усі щасливі та задоволені :)')
        })
    })
}

function preparations(callTo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Ти маєш подзвонити до ${callTo}`)
        }, 450)
    })
}

function family(callTo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Не забудь також подзвонити до ${callTo}`)
        }, 150)
    })
}

function church(children) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Сьогодні до нас прийшло ' + children + ' діток')
        }, 700)
    })
}

start(7)
    .then(value => {
        console.log(value);
        return washFace(3)
    })
    .then(value => {
        console.log(value);
        return wakeUp()
    })
    .then(value => {
        console.log(value);
        return readTheBible(true)
    })
    .then(value => {
        console.log(value);
        return breakfast(5)
    })
    .then(value => {
        console.log(value);
        return telegram()
    })
    .then(value => {
        console.log(value);
        return lections(true)
    })
    .then(value => {
        console.log(value);
        return homweork()
    })
    .then(value => {
        console.log(value);
        return girl()
    })
    .then(value => {
        console.log(value);
        return preparations('Vika')
    })
    .then(value => {
        console.log(value);
        return family('Papa')
    })
    .then(value => {
        console.log(value);
        return church(24)
    })
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.warn(reason);
    })
