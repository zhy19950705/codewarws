const getParamName = attr => {
    let match = RegExp(/[?&]${attr}=([^&^]*)/)
}

let reg1=/\(?0\d{2}[)-]?\d{8}/.test('022-12345678')
console.log(reg1)
let reg2=/\(?0\d{2}\)?[-]?\d{8}|0\d{2}[-]?\d{8}/.test('022)-12345678')
console.log(reg2)

let reg3=/(\d{3}\.){3}\d{1,3}/  //IP匹配

let res=/(\d+)-(\w+)/.exec('12-ab')
console.log(res)

let reg4=/\d/g ,result =[],crt;
while (crt=reg4.exec('a123')!==null){
    result.push(reg4.lastIndex)
}
console.log(result)


console.log('ab22432c45d5e'.match(/(2\d{2})/g))

let a='aaaa'.replace(/\w/g,function (value) {
    return value.toUpperCase()
})
console.log(a)

console.log('aa11AA'.replace(/([a-z]+)(\d+)([A-Z]+)/g,'$2'))

// 数字格式化问题，1234567890 --> 1,234,567,890
// /\B(?=(\d{3})+(?!\d))/g：正则匹配边界\B，边界后面必须跟着(\d{3})+(?!\d);
// (\d{3})+：必须是1个或多个的3个连续数字;
// (?!\d)：第2步中的3个数字不允许后面跟着数字;
// (\d{3})+(?!\d)：所以匹配的边界后面必须跟着3*n（n>=1）的数字。
let test1='1234567890';
let reg5=/\B(?=(\d{3})+(?!\d))/g
let format=test1.replace(reg5,',')
console.log(format)

let test2="I m singing while you're dancing"
let t=test2.match(/\w+(?=ing\b)/g)
console.log(t)

const trim = str => {
    return str.replace(/(^\s*)|(\s*$)/g,"")
}
let str=" jaw il "
console.log(trim(str))

const isPrime = num => {
    return !/^1?$|^(11+?)\1+$/.test(Array(num+1).join('1'))
}
console.log(isPrime(19))

// 模板字符串替换
const render = (template,context) => {
    return template.replace(/\{\{(.*?)\}\}/g,(match,key)=>context[key])
}
const template = "{{name}}很厉name害，才{{age}}岁";
const context = { name: "jawil", age: "15" };
console.log(render(template, context));