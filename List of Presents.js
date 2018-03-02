const howManyGifts = (maxBudget,gifts) => {
   let i=0;
   gifts=gifts.sort((a,b) => a-b);
   for(;maxBudget-gifts[i]>=0;i++){
       maxBudget-=gifts[i]
   }
   return i;
}
console.log(howManyGifts(20, [13, 2, 4, 6, 1]))