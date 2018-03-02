function palidromeChainLength(n) {
    let l=0;
        while (n.toString().split('').reverse().join('')!==n.toString()){
            if(n>=0&&n<=9){
               l=0
            }else {
                n=parseInt(n)+parseInt(n.toString().split('').reverse().join(''))
                l=n.toString().length
            }
        }
        return l
}
console.log(palidromeChainLength(2))

var palindromeChainLength  = function(n) {
    var x = parseInt( (""+n).split('').reverse().join('') );
    if(n != x){
        return 1 + palindromeChainLength (n + x);
    }
    return 0;
};
