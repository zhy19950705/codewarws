function inArray(array1,array2) {
    return array1.filter(a1=>array2.find(a2=>a2.match(a1))).sort()
}
function inArray2(a1,a2) {
    let str=a2.join(' ');
    return a1.filter(s=>str.indexOf(s)!==-1)
}
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "strong","live" ]
console.log(inArray2(a1,a2))
