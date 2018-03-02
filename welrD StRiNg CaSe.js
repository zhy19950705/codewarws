function toWeirdCase(string){
    return string.split(' ').map(function (el) {
       return el.split('').map(function (letter,index) {
           return index%2==0?letter.toUpperCase():letter.toLowerCase()
       }).join('')
    }).join(' ')
}
console.log(toWeirdCase('abc a'))