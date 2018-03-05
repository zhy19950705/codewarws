const countRepeats = str => {
    let arr=str.split('');
    let count=0
    for(let i=1;i<arr.length;i++){
        if(arr[i]===arr[i-1]) {
            i--;
            arr.splice(i,1);
            count++
        }
    }
    return count
}
console.log(countRepeats('aabbccddeeffgg'))
const countRepeat2 = str => {
    return (str.match(/(.)(?=\1)/g)||[]).length
}
const countRepeat3 = str => {
    let count=0,last;
    for(let ch of str) ch===last?count++:last=ch;
    return count
}
