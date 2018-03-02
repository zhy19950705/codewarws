function reverseWords(str) {
    return str.split(' ').map(function (el) {
        return el.split('').reverse().join('')
    }).join(' ')
}
console.log(reverseWords('the quick'))