function checkStr(str){
    let i = 0
    const stack = []
    const map = {
        ']':'[',
        ')':'(',
        '}':'{',
    }
    while(i < str.length){
        const value = map[str[i]]
        if(value && (value === stack[stack.length-1])){
            stack.pop()
        }else{
            stack.push(str[i])
        }
        i++
    }
    return stack.length === 0
}
console.log(checkStr('((()))[]{}'))

