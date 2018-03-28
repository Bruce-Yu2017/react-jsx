class Person {
  constructor(name = "bruce", age = 20) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    // return "My name is " + this.name + ", and my age is " + this.age; 
    return `My name is ${this.name}, and my age is ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let des = super.greeting();
    if(this.hasMajor()) {
      des += `. His major is ${this.major}`;
    }
    return des;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  greeting() {
    let greet = super.greeting();
    if(this.homeLocation) {
      greet += `. I am from ${this.homeLocation}`;
    }
    return greet;
  }
}
// let me = new Student("jiahao", 30, "cs");
// console.log(me.getDescription());
let me = new Traveler("jiahao", 30, "SF");
console.log(me.greeting());

let other = new Traveler();
console.log(other.greeting());