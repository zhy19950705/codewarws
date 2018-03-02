const high = s => {
    let as=s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))]
}
const high2 = x => {
    let arr=x.toLowerCase().split(' ');
    let sum=0;
    let holder=0;
    let holder2=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i].charCodeAt(j)-96;
        }
        if(sum>holder){
            holder=sum;
            holder2=i;
        }
        sum=0
    }
    return arr[holder2]
}
console.log(high2('man i need a taxi up to ubud'))