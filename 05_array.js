// Array's

// const cars = ['Mazda','Ford','Mercedes','BMV','Volkswagen']
// const fib = [1,1,2,3,5,8,13]
// const people =[
//     {nname:'Serjs', budget: 4200},
//     {nname:'Serj', budget: 3500},
//     {nname:'Se', budget: 1400},
// ]

//
// cars.push('Porsche')
// cars.unshift('Lada')
//
// const firstItem = cars.shift()
// const lastCar = cars.pop()
// console.log(firstItem)
// console.log(lastCar)
// console.log(cars)
// console.log(cars.reverse())
// console.log(cars)

// const inndex = cars.indexOf('BMV')
// const index = people.findIndex(function (person){
//     return person.budget === 3500
// })
// const person = people.find(function (person){
//     return person.budget === 3500
// })
// cars[inndex] = 'Ferrari'
// console.log(cars)

// let finddedPerson
// for (const person of people){
//     if (person.budget === 3500){
//         finddedPerson = person
//     }
// }

// const person = people.find(person => person.budget === 3500)
// console.log(person)

// Quest
// const text = 'Hello, we are studying JS'
// const reverse = text.split('').reverse().join('.')
// console.log(reverse)

// console.log(cars.includes('aria'));

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase(cars)
// })
// const pov2Fib = fib.map(num => num ** 2)
// console.log(pov2Fib)
// console.log(upperCaseCars)
// console.log(cars)

// const people =[
//     {nname:'Serjs', budget: 4200},
//     {nname:'Serj', budget: 3500},
//     {nname:'Se', budget: 1400},
// ]

// Summ of budgets that are more than 2000 *Incorrect syntax
// const allBudget = people.reduce((acc,person) => {
//     if (person.budget > 2000){
//         acc += person.budget
//     }
//     return acc
// }, 0)
// console.log(allBudget)

//Summ of budgets in correct form
// const allBudgetsCorrect = people.filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//         acc += person.budget
//         return acc
// }, 0)
// console.log(allBudgetsCorrect)
