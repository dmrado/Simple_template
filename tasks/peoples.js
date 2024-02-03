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


const young = people.reduce((acc, currentValue) => {
    // console.log('currentValue', currentValue)
    if (currentValue?.age < 20){
        acc.push(currentValue)
    }
    // console.log('acc', acc)
    return acc
}, [])
// В этом примере, для каждого элемента массива (currentValue), мы проверяем, меньше ли он 20. Если да, то добавляем его в аккумулятор (accumulator) с помощью метода push. Если нет, просто переходим к следующему элементу.
// Инициализация accumulator как пустого массива [] позволяет нам собрать в нём все подходящие значения. В конце выполнения reduce, accumulator будет содержать все значения из исходного массива, которые меньше 20.
console.log('young', young)


const workingAge = people.reduce((acc, currentValue) => {
    if(currentValue?.age > 20 && currentValue?.age < 65){
        acc.push(currentValue)
    }
    return acc
}, [])
console.log('workingAge', workingAge)

const senior = people.reduce((acc, currentValue) => {
    if(currentValue?.age >= 65){
        acc.push(currentValue)
    }
    return acc
}, [])
console.log('senior', senior)
