function nameInStr(str,name) {
    name=name.toLowerCase();
    str.toLowerCase();
    let index=0;
    for(let char of str){
        if(char === name[index]) index++
    }
    return index===name.length
}
