// modules and exports(person.js and index.js)
const person = {
  name: 'jhon',
  age: 25,
  location: 'texas',
};

class formValues {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  formFilledValues() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = { person, formValues };
