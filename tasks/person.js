const faker = require('faker');

function generatePerson() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const salary = Math.floor(Math.random() * 101); // Зарплата от 0 до 100
            const email = Math.random() > 0.5 ? faker.internet.email() : null; // Email опционально

            if (salary > 90) {
                reject(new Error("Такой зарплата не бывает!")); // Ошибка, если зарплата больше 90
            } else {
                resolve({
                    name: faker.name.findName(),
                    salary: salary,
                    gender: Math.random() > 0.5 ? 'male' : 'female',
                    email: email
                });
            }
        }, 1000); // Задержка на 1 секунду
    });
}

async function main() {
    while (true) {
        try {
            const person = await generatePerson();
            console.log(`Новый человек: имя ${person.name}, зарплата ${person.salary}, пол ${person.gender}, емейл ${person.email ? person.email : 'Нет емейла'}`);
        } catch (error) {
            console.log("ой, нету человека");
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // Пауза на 1 секунду перед следующей попыткой
    }
}

main();


