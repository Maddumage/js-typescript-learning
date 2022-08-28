// classes are a template for creating objects
// they are encapsulate data with code to work on that data

class Person {
	// you can create the constructor by yourself otherwise javascript create it for you
	// but then you are not able to set initial values for object attributes
    // constructor is a special type of method
	constructor(name) {
		this.name = name;
	}

	// class method
	displayName() {
		console.log(`Welcome ${this.name}`);
	}
}

// js automatically calls constructor method when a new object is created
const person1 = new Person('John');
const person2 = new Person('Chin');

console.log(person1.name);
// John
console.log(person2.name);
// Chin

person1.displayName();
// Welcome John
