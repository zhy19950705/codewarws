const digPow2 = (n,p) => {
  let arr=n.toString().split('');
  let sum=0;
    for(let i=0;i<arr.length;i++,p++){
      sum+=Math.pow(parseInt(arr[i]),p)
    }
    for(let i=1;i*n<=sum;i++){
     if(i*n===sum) return i
    }
    return -1
}
console.log(digPow(46288,3))
const digPow = (n,p) => {
  let x=String(n).split('').reduce((s,d,i)=>s+Math.pow(d,p+i),0)
    return x%n?-1:x/n
}