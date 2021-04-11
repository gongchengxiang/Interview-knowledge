class EventBus{
  constructor(){
    this.handles = {}
  }
  on(eventName,handle){
    if(!this.handles[eventName]) this.handles[eventName] = []
    if(handle && typeof handle == 'function') this.handles[eventName].push(handle)
  }
  off(eventName,handle){
    if(this.handles[eventName]){
      this.handles[eventName] = this.handles[eventName].filter(e=>{
        return e !== handle
      })
    }
  }
  emit(eventName,...rest){
    if(this.handles[eventName]){
      this.handles[eventName].forEach(e=>{
        e(...rest)
      })
    }
  }
}

const eventBus = new EventBus()
const sayHi = (name)=>{
  console.log('hello ' + name)
}
eventBus.on('sayHi',sayHi)
eventBus.off('sayHi',sayHi)
eventBus.emit('sayHi','gcx')