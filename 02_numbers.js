// //Number
// const num = 42
// const float = 42.42
// const pow = 10e3
// console.log('MAX_SAfE_Integer',Number.MAX_SAFE_INTEGER)
// console.log('MATH.POW',Math.pow(2,53) - 1)
// console.log('MIN_SAFE_INTEGER',Number.MIN_SAFE_INTEGER)
// console.log('Max_value',Number.MAX_VALUE)
// console.log('Min-value',Number.MIN_VALUE)
// console.log('Infinity',Number.POSITIVE_INFINITY)
// console.log(Number.NaN) //Not a number
// console.log(isFinite(Infinity))
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number.parseFloat(stringFloat) + 2)
// //
// console.log(0.4 + 0.2) //0.6
// console.log(parseFloat((0.4+0.2).toFixed(1)))
// console.log(+(0.4+0.2).toFixed(1))

//BigInt
// console.log(900719925474099234231n - 1007199254740991n)
// console.log(-900719925474099234234n)
//
// console.log(10n - 4)// error
//console.log(10n - BigInt(4)) //6n

//3 Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.pow(3,5))
// console.log(Math.max(42, 12, 33, 45, 55))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(3.5))
// console.log(Math.round(3.5))
// console.log(Math.random())

// 4 Examples
function getRandomBetween(min, max){
    return Math.floor(Math.random()*(max - min) + min)}

console.log(getRandomBetween('10','42'))
