function validate(n) {
  let arr=n.toString().split('');
  let sum=0;
  if(arr.length%2===0){
      for(let i=0;i<arr.length;i+=2){
          arr[i]=arr[i]*2
      }
  }else {
      for (let i=1;i<arr.length;i+=2){
          arr[i]=arr[i]*2
      }
  }
  for(let i=0;i<arr.length;i++){
      if(arr[i]>9){
          arr[i]-=9
      }
      sum+=parseInt(arr[i])
  }
  return sum%10===0
}
console.log(validate(2121))