function spinWords(str) {
    let arr=str.split(' ');
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>=5){
    arr[i]= arr[i].split("").reverse().join("")
        }
    }
    let res=arr.join(' ')
    return res
}
spinWords("Hey fellow warriors")
console.log('abc'.split("").reverse().join(""))