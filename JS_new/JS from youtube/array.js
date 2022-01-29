const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']

// const people = [
//     {CustomerName: 'Alex', budget: 4200},
//     {CustomerName: 'Artem', budget: 3500},
//     {CustomerName: 'Ira', budget: 3040}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('Lada')
// cars.unshift('skoda')
// const FirstItem = cars.shift()
// const LastItem = cars.pop()
// console.log(cars);
// console.log(FirstItem);
// console.log(LastItem);

// console.log(cars.reverse());
// console.log(cars);

// const text = 'Долго шли, зноем и морозами, все снесли да остались вольными'
// const ReversText = text.split('').reverse().join('')
// console.log(ReversText)
// cars[index] = 'ZAZ'
// console.log(cars);
// const index = cars.lastIndexOf('BMW');

// const index = people.findIndex( function(person) {
//     return person.budget === 3500
// })

// const person = people.find(function(person) {
//     return person.budget === 3500
// })
// let FindPerson
// for (const person of people){
// if (person.budget === 3500) {
//     FindPerson = person
// }

// console.log(FindPerson);}

// const newPerson = people.find(person => person.budget === 3500)
// console.log(newPerson);

// console.log(cars.includes('Mazda'));

// const upperCaseCars = cars.map( car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars);

// const  pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const fillteredNumbers = pow2Fib.filter(num => {
//     return num > 20
// })
// console.log(fillteredNumbers);
// console.log(pow2Fib);

const people = [
    {CustomerName: 'Alex', budget: 4200},
    {CustomerName: 'Artem', budget: 3500},
    {CustomerName: 'Ira', budget: 2040}
]

const allBudget = people
.filter(person => person.budget > 3000)
.reduce((acc, person) => {
       acc += person.budget 
    return acc
}, 0)
console.log(allBudget);