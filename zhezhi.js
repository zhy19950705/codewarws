function foldTo(distance) {
    // let res;
    // if(distance<=0){
    //     res=null
    // }else {
    //     for(let i=0;i<200;i++){
    //         if(0.0001*Math.pow(2,i)>=distance){
    //             res=i;
    //             break
    //         }
    //     }
    // }
    // return res
    return distance>0?Math.max(0,Math.ceil(Math.log2(1e4*distance))):null
}
console.log(foldTo(384000000))