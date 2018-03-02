const solve = s => {
    let res=[];
    res.push(s.match(/[A-Z]/g).length);
    res.push(s.match(/[a-z]/g).length);
    res.push(s.match(/\d/g).length)
    res.push(s.match(/\W/g).length)
    return res
}
console.log(solve("Codewars@codewars123.com"))