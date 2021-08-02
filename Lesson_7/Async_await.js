

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

function start (time) {
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

function washFace (duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Час освіжитися');

            if (duration < 3 ) {
                reject('Не прокинешся!')
            } else  {
                resolve('Нарешті вмилися!')
            }
        }, 300)
    })
}

function wakeUp () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ми прокинулися...')
        }, 1800)
    })
}

function  readTheBible (status) {
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

function breakfast (eggsNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (eggsNumber < 3) {
                reject('Будеш голодний....')
            } else {
                resolve('Смачно поснідали!')
            }
        },800)
    })
}

function telegram () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Нових повідомлень немає')
        }, 1500)
    })
}

function lections (status) {
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

function homweork () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Домашка done!')
        }, 200)
    })
}

function girl () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Усі щасливі та задоволені :)')
        })
    })
}

function preparations (callTo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Ти маєш подзвонити до ${callTo}`)
        }, 450)
    })
}

function family (callTo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Не забудь також подзвонити до ${callTo}`)
        }, 150)
    })
}

function church (children) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Сьогодні до нас прийшло ' + children + ' діток')
        }, 700)
    })
}

async function daySchedule () {
    try {
        const start_v = await start(8)
        console.log(start_v)

        const washFace_v = await washFace(4)
        console.log(washFace_v)

        const wakeUp_v = await wakeUp()
        console.log(wakeUp_v)

        const readTheBible_v = await readTheBible(false)
        console.log(readTheBible_v)

        const breakfast_v = await breakfast(5)
        console.log(breakfast_v)

        const telegram_v = await telegram()
        console.log(telegram_v)

        const lections_v = await lections(true)
        console.log(lections_v);

        const homweork_v = await homweork()
        console.log(homweork_v);

        const girl_v = await girl()
        console.log(girl_v);

        const preparations_v = await preparations('Yura')
        console.log(preparations_v);

        const family_v = await family('Mama')
        console.log(family_v);

        const church_v = await church(18)
        console.log(church_v);

    } catch (reason) {
        console.log(reason)
    }
}

daySchedule()