
// let result = 0;
// for (let year = 2000; year < new Date().getFullYear(); year++) {
//     for(let month = 0; month < 12; month ++) {
//         let date = new Date(year, month, 13);
//         if(date.getDay () === 5) {
//             result++;
//         }
// }
// }
// console.log(result);

let day = 1;
let finishDate = new Date();
let startDate = new Date (2000, 0, day);
let counter = 0;

while (startDate < finishDate) {
    if(startDate.getDate() === 13 && startDate.getDay() === 5) {
        counter ++;
    }
    day++;
    startDate = new Date(2000, 0, day)
}
console.log(counter);