// FUNCTIONS


//function Expression - we can't use it
//under declaring
const greet2 = function greet2(name){
    console.log('hello2 - ', name)
}
//greet('Elena')
//greet2('Elena')


//function Declaration - we can use it under
//declaring
function greet(name){
    console.log('hello - ',name)
}

// console.log(typeof greet)
//console.dir(greet)

//Anonymous function
// let counter = 0
// const interval = setInterval(function (){
//     if (counter === 5){
//         clearInterval(interval) //clearTimeout
//     }else{
//     console.log(++counter)
// }},1000)

// 3 Arrow functions Стрелочные функции
const arrow = (name, age) => {
    console.log('Hello - ', name, age)
}

const arrow2 = name => console.log('Hello - ',name)
arrow('Elena')
arrow2('Elena')

const pov2 = num => num ** 2
//console.log(pov2(5))

// 4 Параметры по умолчанию
const sum = (a = 40,b = 1) => a+b
// console.log(sum(41,3))
// console.log(sum())

function sumAll(...all){
    let result = 0
    for (let num of all){
        result += num
    }
    return result

}

const  res = sumAll(1,2,3,4,5,6,7,8,9)
//console.log(res)

// 5 Замыкания
function createMember(name){
    return function (lastName){
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Serj')
console.log(logWithLastName(' Dariy'))
