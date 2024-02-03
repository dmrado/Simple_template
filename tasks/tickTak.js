const seconds = new Array(10);
for (let i = 0; i < seconds.length; i++) {
    seconds[i] = i + 1;
}
console.log(seconds)

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


// const tickTak = (seconds) => new Promise(resolve => {
//     for(let i=0; i<seconds.length-1; i++) {
//         console.log(seconds[i])
//         resolve(i)
//     }
// })
//
// const startTickTak = (seconds) => {
//     const tick = (i) => {
//         tickTak(i, seconds).then((index) => {
//             if (index < seconds.length - 1) { // Проверяем, не достигнут ли конец массива
//                 setTimeout(() => tick(index + 1), 1000); // Вызываем tick для следующего элемента через 1 секунду
//             }
//         });
//     };
//     tick(0); // Начинаем с первого элемента (индекс 0)
// };
//
// startTickTak(seconds)