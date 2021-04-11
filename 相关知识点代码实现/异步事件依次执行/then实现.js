const events = []
while (events.length < 5) {
    const eventIndex = events.length
    events.push(
        function () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(`事件${eventIndex}执行完了`)
                    resolve()
                },Math.random()*5000)
            })
        }
    )
}


let eventIndex = 0
let eventChain = Promise.resolve()
while (eventIndex < events.length) {
    eventChain = eventChain.then(events[eventIndex]).then(() => {
        
    })
    eventIndex++
}