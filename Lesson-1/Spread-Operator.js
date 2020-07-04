// The spread operator, written with three consecutive dots ( ... ), is new in ES6 and
//  gives you the ability to expand, or spread,
//  iterable objects into multiple elements.


const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits,...vegetables];

console.log(produce);