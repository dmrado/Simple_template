/*массив людей (имя и возраст) человек 100... Создай руками или через фейкер....
Нам нужно создать объект где 3 поля:
- до 20 лет: массив молодых людей
- от 20 до 65: массив работоспособных людей
- от 65 и выше - массив пенсионеров*/

const {faker} = require('@faker-js/faker')
const now = new Date()
//встроенный класс для приведения даты из calculateAge() к дате в объекте now
const RUDate = new Intl.DateTimeFormat()
console.log('now', now.getFullYear())

// генерим рандомные годы рождения от 0 до 100
function generateAge(count) {
    return calculateAge(RUDate.format(
        faker.date.birthdate({min: 0, max: 100})))
}

//calculateAge требует аргумента поэтому он здесь
function calculateAge(arg) {
    const birthDate = new Date(arg)
    console.log('birthDate', birthDate.getFullYear())
    console.log('arg for calculateAge', arg)

    //вычисляем год по отношению к текущему
    let age = now.getFullYear() - birthDate.getFullYear()
    console.log('age', age)

    //вычисляем месяц по отношению к текущему
    const monthDiff = now.getMonth() - birthDate.getMonth()
    console.log('monthDiff', monthDiff)
    console.log('birthDate.getMonth()', birthDate.getMonth())
    //вычитаем один год если месяц рождения еще не наступил (если разница отрицательная)
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}

// генерим полные имена
function generateName(number = 100) {
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

const people = generatePeople(100)
console.log('people', people)


const categorizedPeoples = people.reduce((accum, currentValue) => {
    if (currentValue?.age < 20) {
        accum['young'].push(currentValue)
    } else if (currentValue?.age >= 20 && currentValue?.age < 65) {
        accum['workingAge'].push(currentValue)
    } else if (currentValue?.age >= 65) {
        accum['senior'].push(currentValue)
    }
    return accum
}, {young: [], workingAge: [], senior: []})

// эта часть кода задаёт структуру данных, которая будет заполняться в процессе работы reduce, обеспечивая удобную категоризацию людей по возрастным группам.

console.log('categorizedPeoples', categorizedPeoples)
