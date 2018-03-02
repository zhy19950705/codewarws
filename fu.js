function alphabetPosition(text) {
    let arr=text.split(' ');
    let res=[]
    for(let i=0;i<arr.length;i++){
        let qq=arr[i].toLowerCase().replace(/[^a-z]+/ig,"").split('');
        for(let j=0;j<qq.length;j++){
          res.push(qq[j].charCodeAt(0)-96)
        }
    }
    // console.log(res)
    return res.join(' ');
}
let alphabetPosition2= (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
alphabetPosition("The sunset sets at twelve o' clock.")