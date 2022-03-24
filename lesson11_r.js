class Playroom {
  constructor(totalPrice) {
    this.totalPrice = totalPrice;
    this.toys = [];
  }

  add(toy) {
    const currentTotal = toy.price + this.getCurrentTotalPrice();
    if (this.totalPrice > currentTotal) {
      this.toys.push(toy);
      console.log(`Congrats!!! Toy has been added! You still can add toys in sum of ${this.totalPrice - currentTotal}`);
    } else {
      console.log(`Sorry, but you cannot add a new toy, cause max total price of all toys in this playground is ${this.totalPrice}, while your current price include this toy is ${currentTotal}`);
    }
  }

  getCurrentTotalPrice() {
    return this.toys.length < 1 ? 0 : this.toys.reduce((acc, { price }) => acc + price, 0);
  }

  sortByPrice() {
    return [...this.toys].sort((a, b) => a.price - b.price);
  }


  countToys() {
    const names = this.toys.map(obj => obj.name);

    return names.reduce((acc, name) => {
      if (!acc[name]) {
        acc[name] = 0;
      }
      acc[name] += 1;
      return acc;
    }, {});
  }

  getAge() {
    this.toys.map((toy) => {
      const date = toy.dateofProduction;
      if (date instanceof Date) {
        const today = new Date;
        toy.age = today.getFullYear() - date.getFullYear();
      }
      return toy;
    });
  }
}

class Toy {
  constructor(size, price, dateofProduction, color, age) {
    this.size = size;
    this.price = price;
    this.dateofProduction = dateofProduction;
    this.color = color;
    this.age = age;

  }
}

class Car extends Toy {

  constructor(...args) {
    super(...args);
    this.name = 'Car';
  }
}

class Doll extends Toy {

  constructor(...args) {
    super(...args);
    this.name = 'Doll';
  }
}

class Ball extends Toy {

  constructor(...args) {
    super(...args);
    this.name = 'Ball';
  }
}


const playroom = new Playroom(1000);
playroom.add(new Ball('big', 200, new Date(1990, 5, 20), 'red'));
playroom.add(new Ball('small', 200, new Date(2001, 5, 20), 'red'));
playroom.add(new Doll('big', 100, new Date(2000, 5, 20)), 'blue');
playroom.add(new Car('big', 300, new Date(2001, 5, 20), 'green'));
playroom.add(new Car('big', 300, new Date(2001, 5, 20), 'green'));
console.log('my playroom is: ', playroom); 
console.log('what is total price: ', playroom.getCurrentTotalPrice()); 
console.log('sorted toys: ', playroom.sortByPrice()); 
console.log('get age: ', playroom.getAge()); 
console.log(playroom)
console.log('how many stuff do we have here: ', playroom.countToys());  
