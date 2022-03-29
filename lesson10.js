//Task1
function getRandom(max,min) {
    return Math.floor(Math.random()* (max-min+1)+min);
}

function getTimeout () {
   return new Promise((res, rej)=> {
        let random = getRandom(5,1);
        setTimeout (()=> {
            res (random);
        }, random * 1000)
    })
}
let promise1 = getTimeout();
let promise2 = getTimeout();
let promise3 = getTimeout();
Promise.all([promise1, promise2, promise3])
.then ((data) => {
    let sum = data.reduce((acc, next)=> {
        return acc+next
       
    })
    console.log(sum);
    return sum;
})

//Task2 


const promise21 = new Promise((resolve, reject) => {
    setTimeout(resolve, getRandom(5,1), '1');
  });
  
  const promise22 = new Promise((resolve, reject) => {
    setTimeout(resolve, getRandom(5,1), '2');
  });
  const promise23 = new Promise((resolve, reject) => {
    setTimeout(resolve, getRandom(5,1), '3');
  });
Promise.race([promise21, promise22, promise23]).then((value) => {
    console.log(value);
})

//Task3

function getNum () {
       return new Promise((res, rej)=> {
            let random = getRandom(5,1);
            setTimeout (()=> {
                res (random);
            }, 3 * 1000)
        })
    }
    async function pow() {
        const a = await getNum();
           console.log(a*a);
        return a* a;
      }
    pow();
    
//Task 4


function getNum1 () {
    return new Promise((res, rej)=> {
         let random = getRandom(5,1);
         setTimeout (()=> {
             res (random);
         }, 3 * 1000)
     })
 }
 function getNum2 () {
    return new Promise((res, rej)=> {
         let random = getRandom(10,6);
         setTimeout (()=> {
             res (random);
         }, 5 * 1000)
     })
 }
 async function addNumbers(x) {
    const a = await getNum1();
    const b = await getNum2();
    console.log(a+b);
    return a + b;
  }
  
addNumbers();
  