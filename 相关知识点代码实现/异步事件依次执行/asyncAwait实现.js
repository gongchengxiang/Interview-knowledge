// 利用async await 实现
// 事件需要用promise包装一下
// 模拟异步事件队列
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

async function asyncEventExecute(events) {
    let eventIndex = 0
    while (eventIndex < events.length) {
        await events[eventIndex]()
        eventIndex++
    }
    console.log('全完了')
}
asyncEventExecute(events)