const solve = arr => {
    let sum=0;
    let newArr=arr.sort((a,b)=>a-b);
    for (i of newArr){
        if (i > sum +1) break;
        sum += i
    }
    return sum + 1
};
console.log(solve([1,2,6,7]))