// Event Loop
// const timeOut = setTimeout(() =>{
//     console.log('After timeout')
// },2500)
// clearTimeout(timeOut)
//
// const interval = setInterval(() => {
//     console.log('After timeout')
// }, 1000)
// clearInterval(interval)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
// delay(() => {
//     console.log('After 2 seconds')
// }, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("What's get wrong")
        }, wait)
    })
    return promise
}

// delay(2500)
// .then( () => {
//     console.log('After 2 seconds')
// })
// .catch(err => console.error(err))
// .finally(() => console.log('Finally'))

const getData = () => new Promise( resolve => resolve([
    1,1,2,3,5,8,13
]))
getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    }
    catch (e){
        console.log(e)
    }finally {
        console.log('Finally')
    }

}
asyncExample()