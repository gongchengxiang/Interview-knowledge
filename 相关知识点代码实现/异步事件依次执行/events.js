// 模拟异步事件队列
const events = []
while (events.length < 5) {
    const eventIndex = events.length
    events.push(
        function (next) {
            setTimeout(() => {
                console.log(`事件${eventIndex}执行完了`)
                next()
            },Math.random()*5000)
        }
    )
}