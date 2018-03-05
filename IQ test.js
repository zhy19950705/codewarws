const iqTest = numbers => {
    let arr=numbers.split(' ');
    for(i of arr){
        arr[i]=parseInt(i)+1
    }
    return arr
}
console.log(iqTest('1 2 3'))