function findShort(s){
   //  var arr= s.split(' ')
   //  var min=arr[0];
   //  for(var i=1;i<arr.length;i++){
   //      var cur=arr[i];
   //      console.log(cur.length)
   //      cur.length<min.length?min=cur:null;
   //  }
   // return min.length
    return Math.min.apply(null,s.split('').map(w=>w.length))
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'))