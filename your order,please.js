const order2 = words => {
    let arr=words.split(' ');
    let res=[]
    for(let i=0;i<10;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j].indexOf(i)!==-1){
                res.push(arr[j])
            }
        }
    }
    return res.join(' ');
}
console.log(order("is2 Thi1s T4est 3a"))

const order = words => {
   return words.split(' ').sort((a,b)=>{
       return a.match(/\d/)-b.match(/\d/)
   }).join(' ')
}