

// const  cars = ['Mazda', 'BMW', 'Mersedes']
// console.log(cars)
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// console.log(cars)

// cars[cars.length] = 'Mazda'

// console.log(cars)

// const  cars = ['Mazda', 'BMW', 'Mersedes', 'Porsche']

// // for (let i = 0; i < cars.length; i++) {

// // const car = cars[i]
// // console.log(car)
// // }

// for (let car of cars) {
//     console.log(car)
// }


const person = {
    firstName: 'Alex',
    lastName:'Zoro',
    year: 1981,
    languages: ['RU','EN', 'ESP'],
    hasWife:true,
    greet: function(){
        console.log('greet from person')
    }
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = false
console.log(person)
person.isProgrammer = false
console.log(person)
console.log(person)
person.greet()