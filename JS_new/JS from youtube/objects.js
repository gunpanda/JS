const person = {
    name: 'Alex',
    age: 40,
    isProgrammer: false,
    languages: ['ru', 'en', 'esp'],
    // 'compex key': 'Complex Value',
    // ['key_' + (1 + 3)] : '' , //key_4
    greet() {
        console.log('greet from person');
},

info() {
    console.info('Information about:', this.name )
}}
// const ageKey = 'age'
// console.log(person.name);
// console.log(person[ageKey]);
// console.log(person["compex key"])

// console.log(person);
// person.greet()

// person.age++
// person.languages.push('by')
// console.log(person);
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person);

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age:personAge = 10, languages} = person

// console.log(name, personAge, languages);

// for (let key in person) {
//     console.log('key:', key);
//     console.log('value:', person[key]);
// }

// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log(keys);
//     console.log(person[key]);
// })

// Context

// person.info()

const logger = {
    keys() {
    console.log('Object Keys: ', Object.keys(this));
    },
    keysAndValue () {
Object.keys(this).forEach( key => {
    console.log(`"${key}": ${this[key]}`);
})
    }
}
// const bound = logger.keys.bind(person)
// bound()

// logger.keys.call(person)

logger.keysAndValue.call(person)