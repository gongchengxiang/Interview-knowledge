const arr = []
let i = 10000000
arr.length = i
while (i > 0) {
    i--
    arr[i] = Math.pow((parseInt(Math.random()*10)+1),(parseInt(Math.random()*5)+1))+ (parseInt(Math.random()*5)+1)*(parseInt(Math.random()*5)+1)
}
const start = Date.now()
arr.sort((a, b) => a - b)
console.log(Date.now()-start)
