// 利用闭包实现异事件队列执行注册
const nextRegister = function (events) {
    if (!events || events.length < 1) return false;
    let eventIndex = 0
    const next = ()=> {
        eventIndex++
        if (eventIndex < events.length) {
            events[eventIndex](next)
        }
    }
    return events[eventIndex].bind(null, next)
}
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
const firstFn = nextRegister(events)
if (firstFn) firstFn()