class Person {
  constructor() { }

  sayName() {
    console.log('I am daly')
  }

  sayAge() {
    console.log('I am 18')
  }

}

Array.prototype.testSomething = function () {
  console.log('this is side effect')
}

window.test = 'test'

export default Person