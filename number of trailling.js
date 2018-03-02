function zeros(n) {
    // let result=1;
    // while (n){
    //     result*=n;
    //     n--
    // }
   let count=0;
   while(n>=5){
       n=Math.floor(n/5)
       count+=n
   }
   return count
}
console.log(zeros(25))