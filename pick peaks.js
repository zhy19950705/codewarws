function pickPeaks(arr) {
    let pos=[];
    let peaks=[];
    for(let i=1;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]&&arr[i]>arr[i-1]){
            pos.push(i);
            peaks.push(arr[i])
        }
       if(arr[i]===arr[i+1]&&arr[i]>arr[i-1]){
            for(let j=i+1;j<arr.length;j++){
              if(arr[j]!==arr[i]&&arr[j]<arr[i]){
                      pos.push(i)
                      peaks.push(arr[i])
                      break
              }
             else if(arr[j]!==arr[i]&&arr[j]>arr[i]){
                  break
              }
            }
        }
    }
    return {pos,peaks}
}
console.log(pickPeaks([ 1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]))
