function solution(string) {
    let regExp=/[A-Z]/g
    return  string.replace(regExp,function (match) {
        return ' '+match.charAt(0)
    })
}
console.log(solution('camelCase'))