const person = {
    name: 'Serj',
    age: 26,
    isProgrammer: true,
    languages: ['ru','en','ro','md'],
    'complex key': 'Complex value',
    ['key_'+(1+3)]: 'computed key', //Key_4
    greet(){
        console.log('greet from person')
    },
    info (){
        //console.log(this)
        console.info('Info about ',this.name)
    }
}
//console.log(person)

// console.log(person.name)
// const ageKey = 'age'
// console.log(person['age'])
// console.log(person["complex key"])
// console.log(person)
// person.greet()
// delete person['key_4']
//
// person.age++
// person.languages.push('bl')
//person['key_4'] = undefined

//Destructurization
// const {name, age : personAge = 10, languages} = person
// console.log(name, personAge, languages)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {//проверка на наличие
//         //прототипа ибо цикл фор-ин заходит и в прототип
//         console.log('key', key)
//         console.log('value', person[key])
//
//     }
// }

// const keys = Object.keys(person)
// console.log(keys)

//Работа с ключами массива
// Object.keys(person).forEach((key) => {
//     console.log('keys: ', key)
//     console.log('value:', person[key])
// })

//Context
//person.info()

const logger = {
    keys(obj){
        console.log('Object keys ', Object.keys(this))
    },
    keysAndValues(obj){
        // My own method
        // for (let key in this) {
        //     if (this.hasOwnProperty(key)) {//проверка на наличие
        //         //прототипа ибо цикл фор-ин заходит и в прототип
        //         console.log(key,':',this[key])
        //         // console.log('value', person[key])
        //
        //     }
        // }

        //now more efficient method
        Object.keys(this).forEach(key => {
            console.log(`'${key}' : ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false){
        if (top){
            console.log('-----start-----')
        }
        Object.keys(this).forEach((key, index,array) => {
            console.log(`'${key}' : ${this[key]}`)
            if (between && index !== array.length - 1){
                console.log('----------')
            }
        })
        if (bottom){
            console.log('----- end -----')
        }
    }
}
// const bound = logger.keys.bind(person)
// bound()
//logger.keys.call(logger)
logger.withParams.call(person,true,true,true)
logger.withParams.apply(person,[true,true,true])