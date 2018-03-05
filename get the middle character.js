const getMiddle = str => {
    let arr=str.split('');
    let res=[];
    if(arr.length%2===0){
         res.push(arr[(arr.length/2)-1]);
         res.push(arr[arr.length/2])
    }else res.push(arr[(arr.length-1)/2])
    return res.join('')
}
console.log(getMiddle('a'))