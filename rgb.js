function rgb(r,g,b) {
    r>255?r='FF':r=r.toString(16).toUpperCase()
    g>255?g='FF':g=g.toString(16).toUpperCase()
    b>255?b='FF':b=b.toString(16).toUpperCase()
    r<='0'?r='00':1;
    g<='0'?g='00':1;
    b<='0'?b='00':1;

 return r+g+b
}

function rgb2(r,g,b) {
    return toHex(r)+toHex(g)+toHex(b)
}
function toHex(d) {
    if(d<0) return '00'
    if(d>255) return 'FF'
    return ('0'+(Number(d).toString(16))).slice((-2)).toUpperCase()
}
console.log(rgb(-1,0,0))