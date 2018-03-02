const sum_pairs=function (ints,s) {
    let res={};
    for(let i=0;i<ints.length;++i){
        if(res[s-ints[i]]) return [s-ints[i],ints[i]]
        res[ints[i]]=true
    }
}
console.log(sum_pairs([20,-3,40],60))