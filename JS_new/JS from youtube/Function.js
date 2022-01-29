// // Function declaration
// function greet (Myname) {
//     console.log('Hello', Myname);
// }

// //Function Expression
// const greet2 = function greet2 (Mymane) {
// console.log('Hello 2', Mymane);
// }

// // greet('Лена')
// // greet2('Alex')

// // console.log(typeof greet);

// // console.dir(greet)

// let counter = 0
// const  interval = setInterval(function() {
//     if (counter === 5) {
// clearInterval(interval)
//     }
//     else {
//        console.log(++ counter) 
//     }
    
// } , 1000 )

// Стрелочные функции

// function greet (Myname) {
// console.log('Hello', Myname);

// const arrow = (Myname) => {
//     console.log('Hello', Myname);
// }

// const arrow2  = Myname => console.log('Hello1', Myname);
// arrow2('ALex')

// const pow2 = num =>  num ** 2

// console.log(pow2(5));

//Параметры по умолчанию 

// const sum = (a=40, b = a*2) => a + b
// console.log(sum (41, 4));

// function sumAll (...all){
//     let result = 0
//     for (let num of all){
//         result += num
//     }
//     return result

// }

// const res = sumAll(1,2,3,4,5,6,7,8)
// console.log(res);

//Замыкания

// function createMember(PersonName){
//     return function(LastName) {
//         console.log(PersonName + LastName);
//     }
// }
// const logWithLastName = createMember  ('Alex')
// console.log(logWithLastName("Minin"));
// console.log(logWithLastName("Kutuzov"));


