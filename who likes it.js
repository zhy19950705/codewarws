const likes = names => {
    let res=' like this'
    if(names.length===0) return "no one likes this";
    else if(names.length===1) return names[0]+" likes this";
    else if(names.length===2) return names[0]+' and '+names[1]+res;
    else if(names.length===3) return names[0]+', '+names[1]+' and '+names[2]+res;
    else return names[0]+', '+names[1]+' and '+(names.length-2)+' others'+res;
}