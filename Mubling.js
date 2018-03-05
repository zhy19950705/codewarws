const accum2 = s => {
    let arr=s.split('');
    let arr2=s.split('')
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].toUpperCase();
        for(let j=0;j<i;j++){
            arr[i]+=arr2[i].toLowerCase();
        }
    }
    return arr.join('-')
}
console.log(accum("ZpglnRxqenU"))
const accum = s => {
    return s.split('').map((c,i)=>(c.toUpperCase()+c.toLowerCase().repeat(i))).join('-')
}
