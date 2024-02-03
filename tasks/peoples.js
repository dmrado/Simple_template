/*массив людей (имя и возраст) человек 100... Создай руками или через фейкер....
Нам нужно создать объект где 3 поля:
- до 20 лет: массив молодых людей
- от 20 до 65: массив работоспособных людей
- от 65 и выше - массив пенсионеров*/

// const {faker} = require('@faker-js/faker');
//
// function getIntArray() {
//     return [...Array(100).keys()]
// }
//
// function generateName(number = 100) {
//     return [...Array(number).keys()].map(() => ({
//         name: faker.person.fullName()
//     }))
// }
//
// // Генерация массива людей
// function generatePeople(count) {
//     const people = [];
//     for (let i = 0; i < count; i++) {
//         people.push({
//             name: generateName(),
//             age: getIntArray(),
//         });
//     }
//     return people;
// }
//
// const people = generatePeople(100);

const people = [{name: 'Anna', age: 19}, {name: 'Boris', age: 10}, {name: 'Inna', age: 39}, {name: 'Natasha', age: 11}, {name: 'Tat', age: 29}, {name: 'Bob', age: 65}]


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

console.log(categorizedPeoples);
