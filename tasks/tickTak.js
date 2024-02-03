/* Создать код печатает каждую секунду что-то формата "тик и номер секунды". Пусть печатает всего 10 раз.
Тик1
Тик2
Тик3.... каждую секунду.*/

const seconds = new Array(10);
for (let i = 0; i < seconds.length; i++) {
    seconds[i] = i + 1;
}
console.log(seconds)


const seconds = [...Array(10).keys()].map(() => ({
    let a
    for (let i = 0; i < seconds.length; i++) {
    a += seconds[i]
}
    title: `Tick ${a}`
}))
console.log(a)

let currentIndex = 0; // Текущий индекс массива

const tickTackFoo = () => {
    if (currentIndex < seconds.length) {
        console.log(seconds[currentIndex])
        currentIndex++
    } else {
        clearInterval(intervalId)
    }
};
const intervalId = setInterval(tickTackFoo, 1000);


//
// const tickTackFoo = () => {
//     for (let i = 0; i < seconds.length; i++) {
//         // Используем замыкание для сохранения значения i на момент вызова setTimeout
//         ((index) => {
//             setTimeout(() => {
//                 console.log(seconds[index]);
//             }, 1000 * index); // Задержка увеличивается на 1000 мс с каждой итерацией
//         })(i);
//     }
// };
// tickTackFoo();
