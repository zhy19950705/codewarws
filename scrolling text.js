const scrollingText = str => {
    let arr=[];
    arr[0]=str;
    for(let i=1;i=str.length;i++){
        str=str.slice(1)+str.slice(0,1)
        arr.push(str)
    }
    return arr
}
console.log(scrollingText('abcde'))