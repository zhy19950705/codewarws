function scramble(str1,str2) {
    // let arr2=str2.split('');
    // let res=[]
    // for(let i=0;i<arr2.length;i++){
    //   res.push(str1.indexOf(arr2[i])+1);
    //
    // }
    // console.log(res)
    // return res.indexOf(0)===-1?res=true:res=false;
    let map={};
    for(let i in str1){
        map[str1[i]]?map[str1[i]]++:map[str1[i]]=1
    }
    for(let i in str2){
        if(!map[str2[i]]) return false;
        map[str2[i]]--;
    }
    return true
}
console.log(scramble('scriptjava','javascript'))