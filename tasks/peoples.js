/*массив людей (имя и возраст) человек 100... Создай руками или через фейкер....
Нам нужно создать объект где 3 поля:
- до 20 лет: массив молодых людей
- от 20 до 65: массив работоспособных людей
- от 65 и выше - массив пенсионеров*/

const {faker} = require('@faker-js/faker')
const now = new Date()
console.log('now.getFullYear()', now.getFullYear())

// генерим рандомные годы рождения от 0 до 100
function generateAge(count) {
        return calculateAge(faker.date.birthdate({min: 0, max: 100}))
}

function calculateAge(arg) {
    const birthDate = new Date(arg)
    console.log('birthDate.getFullYear()', birthDate.getFullYear())
    console.log('arg for calculateAge', arg)

    let age = now.getFullYear() - birthDate.getFullYear();
    // console.log('now.getFullYear() - birthDate.getFullYear()', now.getFullYear() - birthDate.getFullYear())
    const monthDiff = now.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}

// генерим полные имена
function generateName(number = 1) {
    return faker.person.fullName()
}

// Генерация массива людей
function generatePeople(count) {
    const people = [];
    for (let i = 0; i < count; i++) {
        people.push({
            name: generateName(),
            age: generateAge(),
        });
    }
    return people
}

const people = generatePeople(1)
console.log('people', people)

const getFullYear = now.getFullYear()

    const categorizedPeoples = people.reduce((accum, currentValue) => {
    if (getFullYear - currentValue?.age  < 20) {
        accum['young'].push(currentValue)
    } else if (getFullYear - currentValue?.age >= 20 && getFullYear - currentValue?.age < 65) {
        accum['workingAge'].push(currentValue)
    } else if (getFullYear - currentValue?.age >= 65) {
        accum['senior'].push(currentValue)
    }
    return accum
}, { young: [], workingAge: [], senior: [] })

// эта часть кода задаёт структуру данных, которая будет заполняться в процессе работы reduce, обеспечивая удобную категоризацию людей по возрастным группам.

console.log('categorizedPeoples', categorizedPeoples)
