//1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
function revArr (arr:number[]) {
    let changedArray:number[] = arr.reverse();
    console.log(changedArray);
    return changedArray;
}
let array:number[] = [1,2,3,4,5,6]

revArr (array)

//2) найти максимальное значение числа в массиве ([3,67,15...])
function maxElement (arr:number[]) {
    console.log( Math.max.apply(Math, arr));
}
let arr2:number[] = [3,67,15]
maxElement (arr2)

//4) даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

function Calc (num:number, num2:number) {
    let digits:string[] = num.toString().split('');
    let digits2:string[] = num2.toString().split('');
   
    for (let i=0; i < digits.length; i++) {
        if (digits[i] === digits2[i] && digits.indexOf(digits[i]) === digits2.indexOf (digits2[i])) {
        count2 ++ ;
  
    };
        for (let ch of digits) {
            if (ch === digits2[i]) {
                    count1 ++;
                }
            }
};
}
let count1:number =0;
let count2:number = 0;
let number1:number = 3487;
let number2:number = 3794;
Calc (number1, number2);
console.log(count1);
console.log(count2);

// let arr = [1,2];
// m = arr.length;
// function Fib (i, m) {
// for (let i; i <m; i++) {
// for (let item of arr) {
//     item = item[i-1] + item [i-2]
//     let newArr = arr.concatarr.push (item);
// }
// }
// }
// Fib (3,5)
// console.log (arr);

//5) сортировка массива по возрастанию/убыванию
function sortOrderAsc () {
    
    arr5.sort(function(a, b) {
    return a - b;
});
console.log(arr5);
return arr5;
}
let arr5:number[] = [4, 2, 5, 1, 3];
sortOrderAsc();

function sortOrderDesc () {
    let arr51:number[] = [4, 2, 5, 1, 3];
    arr51.sort((a, b) => a - b).reverse();
    console.log(arr51);
    return arr51;
}
sortOrderDesc();

//6) удалить из массива все повторяющиеся элементы


function uniq(arr6:string[]) {
    
    for (let i =0; i < arr6.length; i++) {
    
        let arr61:string[] = arr6.filter(a => a !== arr6[i]);
        console.log(arr61);
        return arr61;
    }
}
const words:string[] = ['spray', 'spray', 'exuberant', 'destruction', 'present'];
uniq (words);
