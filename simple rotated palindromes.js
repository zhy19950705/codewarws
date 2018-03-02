const solve = st => {
    let t;
    for(let i=1;i<st.length;i++){
        t=st.slice(i)+st.slice(0,i);
        if(t===[...t].reverse().join('')) return true
    }
    return false
}