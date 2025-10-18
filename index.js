// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         if (sucsess) {
//             resolve(".Test.Sucsess.")
//         } else {
//             reject(".Test.Failure.")
//         }
//     }, 3000);
// });

// let sucsess = false;

// promise
//  .then(value => console.log(value))
//  .catch(value => console.log(value))

//1
// function delay(ms) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms);

//     });
// }

// delay(3000).then(() => alert('виконалось через 3 секунди'));

//2
function num(numAray) {
    return new Promise(resolve => {
         if (numAray) { //numAray.every(numAray[i] % 2 === 0)
            resolve("всі парні")
        } else {
            reject("Є не парні")
        }

    });
}

let numAray = [1, 2, 4, 5, 6, 7, 18, 29, 83, 445, 324, 234]

num()
.then(() => alert("ok"));

//3
