function pigIt(str){
    // let arr=str.split(' ');
    // let res=[];
    // let result=''
    // for(let i=0;i<arr.length;i++){
    //     res[i]= arr[i].slice(1)+arr[i][0]+'ay '
    //     result+=res[i]
    // }
    // return result.trim()
    return str.split(' ').map(function (el) {
        return el.slice(1)+el.slice(0,1)+'ay'
    }).join(' ')
}
console.log(pigIt('pig latin'))