function solve(st,a,b) {
    let str1=st.slice(0,a);
    let str2=st.slice(a,b+1);
    let str3=st.slice(b+1)
    let str4=str2.split('').reverse().join('')
    return str1+str4+str3
}
console.log(solve("codewars",1,5))