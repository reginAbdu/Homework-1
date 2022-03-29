//Замыканием сделайте функцию, которая считает и выводит количество своих вызовов.
let counter = (function() {
    let count = 1;
    return function() {
        return count++;
    }
}());
console.log(counter()); 

//2. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.
function getArray() {
    let array = [];
    return function addRandom() {
        let random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            array.push(random);
            for (let i =0; i<100; i++) {
            array.filter (a=>a%array[i]!==0);
            }
        
        if (array.length <100) {
            addRandom();
        }
        return array;
    }
}
let number = getArray();
console.log(number())

// 3.Дан массив с числами [1, -2, 3, 0, 4, -5, 6, -11]. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел
let array3 = [1, -2, 3, 0, 4, -5, 6, -11]
let array3Filtered = array3.filter(array3Number=> array3Number>= 0)
let array3sqrt = array3Filtered.map(element=> Math.sqrt(element))
console.log(array3sqrt)

//4. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

let forArr = ['8', '17', '25', '42','67'];

let recursive_function = function(array){
  if(array.length > 0){
    console.log(array[0]);
    recursive_function(array.slice(1))
  }
}

recursive_function(forArr)

//5. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
function add(nomer) {
    let sum = nomer.toString().split('').reduce((acc, next) => {
        return +acc + +next;
    });
    if(sum >9) {
        return add(sum);
    }
    return sum;
    }
console.log(add(238795))