const findEvenIndex = arr => {
    for(let i=0;i<arr.length-1;i++){
        let arr1=arr.slice(0,i);
        let arr2=arr.slice(i+1);
        if(arr1.length===0&&arr2.reduce((a,b)=>a+b)===0) return 0;
        else if(arr1.length!==0&&arr1.reduce((a,b)=>a+b)===arr2.reduce((a,b)=>a+b)) return i;
    }
    return -1
}
console.log(findEvenIndex([1,2,3,4,5,6]))