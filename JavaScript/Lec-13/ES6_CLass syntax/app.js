// bad
function Queue(contents = []) {
    this.queue = [...contents];
  }
  Queue.prototype.pop = function () {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  };
  
  // good
  class Queue {  //hai function hi ,working bhi same hai behind the scenes
    constructor(contents = []) {
      this.queue = [...contents];
    }
    pop() {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    }
  }
// _________________________________________________________
// BAD PRACTICE
// function Car(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Car.prototype.getName=function () {
//     return this.name;
// }



// const c1 = new Car('BMW', 12345);
// const c2 = new Car('Audi', 999999);


// Good Way

function car(name, age) {
   
    this.name = name;
    this.price = price;
}



const c1 =new car('BMW',123405);
const c2 =new car('Audi',182345);


class car{//Syntactical sugar 
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    getPrice(){
        return this.price;
    }
// Getter & setter method
    get getName(){
        return this,name;
    }
    set setPrice(){
        this.Price = newPrice;
    }
}

const c1 =new car('BMW',123405);
const c2 =new car('Audi',182345);

// ----------------Static Method---------------------------------------------------------------
class Point{
    constructor(a,b){
        this.x=a;
        this.y=b;
    }
    static description='This class represent a point';
    static distance(a,b){
        const dy=a.y-b.y;
        const dx=a.x-b.x;

        return Math.hypot(dy,dx);
    }
}
const p1= new Point(5,5);
const p2= new Point(10,10);
