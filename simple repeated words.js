const solve = (a,b) =>{
    a?[...b].reduce((sum,cur,i)=>{
        sum+=cur===a[0]?solve(a.slice(1),b.slice(i)):0
    },0):1;
}