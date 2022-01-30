//Event Loop

// const timeout = setTimeout(() => {

//     console.log('After timeout');
//     }, 2500 )
//     clearTimeout(timeout)

//     const interval = setInterval(() => {
//         console.log('After timeout');
//     }, 1000)
//     clearInterval(interval)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait) 
// }
// delay( () => {
//     console.log('after 2 sec');
//     }, 3000);


const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait);
    })
    return promise
}

delay(2500)
    .then(() => {
        console.log('After 2,5 sec ');
    })
    .catch(err => console.error(err))
    .finally(() => console.log('Finish'));

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finish')
    }
}
asyncExample()