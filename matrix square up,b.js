const matrixSquareUp =b => {
    let res=[];
   for(let i=0;i<b;i++){
        res[i]=[]
       for(let j=0;j<b;j++){
           res[i][j]=j<i?'x':b-j+''
       }
   }
   return res.reverse()
};
console.log(matrixSquareUp(6))