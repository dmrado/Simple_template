// Генерация случайного числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерация имени (упрощенно)
function generateName() {
    const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George'];
    return names[getRandomInt(0, names.length - 1)];
}

// Генерация массива людей
function generatePeople(count) {
    const people = [];
    for (let i = 0; i < count; i++) {
        people.push({
            name: generateName(),
            age: getRandomInt(1, 100),
        });
    }
    return people;
}

const people = generatePeople(100);

// Распределение людей по возрастным категориям
function categorizePeopleByAge(people) {
    const ageGroups = {
        young: [],
        workingAge: [],
        senior: [],
    };

    people.forEach(person => {
        if (person.age < 20) {
            ageGroups.young.push(person);
        } else if (person.age >= 20 && person.age < 65) {
            ageGroups.workingAge.push(person);
        } else {
            ageGroups.senior.push(person);
        }
    });

    return ageGroups;
}

const sortedPeople = categorizePeopleByAge(people);

console.log(sortedPeople);
