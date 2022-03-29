function RollDice () {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < 3; i++) {
            arr1[i] = Math.floor(Math.random() * 6) + 1;
            arr2[i] = Math.floor(Math.random() * 6) + 1;
            arr1.push(arr1[i]);
            arr2.push (arr2[i]);
    }
    let total1 = arr1.reduce(
      ( previousValue, currentValue ) => previousValue + currentValue,
      0
    );
    let total2 = arr2.reduce(
      ( previousValue, currentValue ) => previousValue + currentValue,
      0
    )
    if (total1 === total2) {
            console.log("Draw!");
        }
    
        else if (total1 < total2) {
            console.log ("player2 WINS!");
        }
    
        else {
            console.log("player1 WINS!");
    }
    };
    RollDice ();


// var date1 = new Date('2000/01/01 00:00:00');
// var date2 = new Date('2022/02/17 10:10:10'); //less than 1
// var start = Math.floor(date1.getTime() / (3600 * 24 * 1000)); //days as integer from..
// var end = Math.floor(date2.getTime() / (3600 * 24 * 1000)); //days as integer from..
// var daysDiff = end - start; // exact dates
// console.log(daysDiff);
// let count = 0 
// while (true) {
// for ( i = 0; i < daysDiff-5; i+=4) {
//         count ++
//         console.log (count)
// }
// }