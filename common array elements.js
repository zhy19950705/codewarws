const common = (a,b,c) => {
    let com=[];
    for(let i=0;i<a.length;i++){
        let temp=a[i];
        if(b.includes(temp)&&c.includes(temp)){
            b.splice(b.indexOf(temp),1);
            c.splice(c.indexOf(temp),1);
            com.push(temp)
        }
    }
    return com.reduce((a,b)=>a+b,0)
}