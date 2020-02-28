console.log("Start")

setTimeout(() => {
    console.log("async 3 seconds")
}, 3000)

setTimeout(() => {
    console.log("async 0 seconds")
}, 0)

console.log("Stop")
