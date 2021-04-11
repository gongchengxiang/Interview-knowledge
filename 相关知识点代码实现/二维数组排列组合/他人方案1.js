var arr=[["a","0"],["b","1"],["c","2",'3']];
function f1(arr) {
    var arr1=[]; // 各个数组长度
    var arr2=[];  // 
    var result=[]; 
    var num=1; // 多少种可能
    for(var i=0;i<arr.length;i++){
        arr1.push(arr[i].length);
        arr2.push(0);
        num=num*arr[i].length;
    }
    var str="";
    for(var k=0;k<num;k++){
        var num1=k;
        str="";
        for(var j=0;j<arr.length;j++){
            arr2[j]=num1%arr1[j];
            str=str+arr[j][arr2[j]];
            num1=parseInt(num1/arr1[j]);
        }
        result.push(str);
    }
    return result;
}

console.log(f1(arr))