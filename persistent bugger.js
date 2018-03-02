let count=0;
const persistence2 = num => {
    if(num>=0&&num<10) return count;
    let res = num.toString().split('').reduce((a, b) => a * b, 1);
    count++;
    return res >= 0&& res < 10 ? count : persistence(res)
}
console.log(persistence(4))
const persistence = num => {
    let times=0;
    num=num.toString();
    while (num.length>1){
        times++;
        num=num.split('').map(Number).reduce((a,b)=>a*b).toString()
    }
    return times
}

