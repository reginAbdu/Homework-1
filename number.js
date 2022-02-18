function numberDivision (number, parts) {
    let arrayParts = [];
    let sumRandom = 0;
    let a = number;
    for (let i =1; i<parts; i++) {
        let random = Number ((Math.random() * a).toFixed(2));
        arrayParts.push(random);
        sumRandom += random;
        a = a -random;
    }
    arrayParts.push(Number((number - sumRandom).toFixed(2)));
    return arrayParts;
}
console.log(numberDivision(2, 3));