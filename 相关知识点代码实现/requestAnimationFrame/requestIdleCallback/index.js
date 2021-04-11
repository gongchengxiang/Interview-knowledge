// 实现有空闲时间就执行tasks中的任务
const tasks = [
  ()=>{
    let i = 0 
    while(i<999999999){
      i++
    }
    console.log('11111')
  },
  ()=>{
    let i = 0 
    while(i<999999999){
      i++ 
    }
    console.log('22222')
  },
  ()=>{
    let i = 0 
    while(i<999999999){
      i++ 
    }
    console.log('33333')
  },
  ()=>{
    let i = 0 
    while(i<999999999){
      i++
    }
    console.log('44444')
  },
  ()=>{
    let i = 0 
    while(i<999999999){
      i++
    }
    console.log('55555')
  },
  ()=>{
    let i = 0 
    while(i<999999999){
      i++
    }
    console.log('66666')
  }
]

// 空闲时执行任务
/**
 * 
 * @param {Array<function>} tasks 
 * @param {number} timeout 
 */
function carryOutTaskInFreeTime(tasks,timeout){
  function excuteTask(deadLine){
    while(deadLine.timeRemaining() > 0 ){
      tasks.shift()()
    }
    if(deadLine.didTimeout){
      tasks.shift()()
    }
    if(tasks.length>0){
      window.requestIdleCallback(excuteTask,{timeout})
    }
  }
  window.requestIdleCallback(excuteTask,{timeout})
}

carryOutTaskInFreeTime(tasks,1000)