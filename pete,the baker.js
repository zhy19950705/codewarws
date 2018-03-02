function toCamelCase(str) {
   let regExp=/[-_]\w/ig;//  /i不区分大小写  /g全局匹配  /m多行模式
   return str.replace(regExp,function (match) {
       return match.charAt(1).toUpperCase()
   })
}
console.log(toCamelCase("the_stealth_warrior"))