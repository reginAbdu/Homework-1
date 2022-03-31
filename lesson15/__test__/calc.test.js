const Calculator = require('../calculator.js')
 const calc = new Calculator;

 describe ('Calculator test: Addition', function(){
     it('Verify adding number', async() => {
            let result = calc.add(0, 2, 8);
            expect(result).toEqual(10)
     });
     it('Verify adding negative number', async() => {
        let result = calc.add(0, -9, 8);
        expect(result).toEqual(-1) 
 })
     it('Verify adding float number', async() => {
     let result = calc.add(1.5, 1.5, 7);
     expect(result).toEqual(10) 
})
})
describe ('Calculator test: Multiplication', function(){
    it('Verify multiplying by zero', async() => {
    let result = calc.multiply(2, 0, 7);
    expect(result).toEqual(0) 
})
    it('Verify multiplying float numbers', async() => {
    let result = calc.multiply(1.5, 1, 7);
    expect(result).toEqual(10.5) 
})
    it('Verify multiplying negative numbers', async() => {
    let result = calc.multiply(-2, -3);
    expect(result).toEqual(6) 
})
})
describe ('Calculator test: Division', function(){
    it('Verify dividing numbers', async() => {
    let result = calc.divide(12, 3);
    expect(result).toEqual(4) 
})
    it('Verify dividing float numbers', async() => {
    let result = calc.divide(6, 1.5);
    expect(result).toEqual(4) 
})
    it('Verify dividing negative numbers', async() => {
    let result = calc.divide(6, -1.5);
    expect(result).toEqual(-4) 
})
    it('Verify dividing by 0', async() => {
            function divideByZero() {
              calc.divide(5, 0);
            }

    expect(divideByZero).toThrowError(new Error ("Can't divide by zero")) 
});
})
describe ('Calculator test: Subtraction', function(){
    it('Verify subtracting integer number', async() => {
           let result = calc.subtraction(0, 2);
           expect(result).toEqual(-2)
    });
    it('Verify subtracting negative number', async() => {
       let result = calc.subtraction(0, -9);
       expect(result).toEqual(9) 
})
    it('Verify subtracting float number', async() => {
    let result = calc.subtraction(1.5, 3);
    expect(result).toEqual(-1.5) 
})
    
 })
 describe ('Calculator test: Exponentiation', function(){
    it('Verify exponentiating integer number', async() => {
           let result = calc.exponentiation(2);
           expect(result).toEqual(4)
    });
    it('Verify exponentiating negative number', async() => {
       let result = calc.exponentiation(-9);
       expect(result).toEqual(81) 
})
    it('Verify exponentiating float number', async() => {
    let result = calc.exponentiation(2.5);
    expect(result).toEqual(6.25) 
})
    
 })
