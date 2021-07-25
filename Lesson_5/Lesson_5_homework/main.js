let nt = function () {
    console.log('    ')
    console.log('NEXT TASK')
    console.log('    ')
}

// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let idContent = document.getElementById('content')
console.log(idContent.textContent);

// -- отримує текст з блоку з id "rules"

nt()

let idRules = document.getElementById('rules')
console.log(idRules.textContent);

// -- замініть текст параграфа з id 'content' на будь-який інший

idContent.innerText = 'any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text any text '

// -- замініть текст параграфа з id 'rules' на будь-який інший

idRules.innerText = '1 куплет\n' +
    'О, благодать! Спасён тобой \n' +
    'Я из пучины бед.\n' +
    'Был мёртв – и чудом стал живой,\n' +
    'Был слеп – и вижу свет.  \n' +
    '\n' +
    '2 куплет\n' +
    'Сперва внушила сердцу страх,\n' +
    'Затем дала покой,\n' +
    'Я скорбь души излил в слезах,\n' +
    'Твой мир течёт рекой.  \n' +
    '\n' +
    '3 куплет\n' +
    'Прошёл не мало я скорбей,\n' +
    'Невзгод и чёрных дней,\n' +
    'Но ты всегда была со мной,\n' +
    'Ведёшь меня домой.  \n' +
    '\n' +
    '4 куплет\n' +
    'Словам Господним верю я,\n' +
    'Моя вся крепость в них:\n' +
    'Он – верный щит, Он – часть моя\n' +
    'Во всех путях моих.  \n' +
    '\n' +
    '5 куплет\n' +
    'Когда же плоть моя умрёт,\n' +
    'Придёт борьбе конец,\n' +
    'Меня в небесном доме ждёт\n' +
    'И радость, и венец.  \n' +
    '\n' +
    '6 куплет\n' +
    'Пройдут десятки тысяч лет,\n' +
    'Забудем смерти тень,\n' +
    'А Богу так же будем петь,\n' +
    'Как в самый первый день.'

// -- змініть кожному елементу колір фону на червоний

idContent.style.background = '#ffbebe';
idRules.style.background = '#ffbebe';

// -- змініть кожному елементу колір тексту на синій

idContent.style.color = '#0035c2';
idRules.style.color = '#0035c2';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

nt()

console.log(idRules.classList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний текст

nt()

let class_fc_rules = document.getElementsByClassName('fc_rules')

for (const rule of class_fc_rules) {
    rule.onclick = function () {
        console.log(rule.textContent);
        console.log('My own random text');
        console.log('____________________');
    }
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний


for (const rule of class_fc_rules) {
    rule.style.color = 'red'
}