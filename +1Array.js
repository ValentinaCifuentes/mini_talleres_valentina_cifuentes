//https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9
function upArray(arr){
    if (arr.length===0 || arr.some(num=>num<0 || num>9)){
      return null;
    }
    for (let i=arr.length-1; i>=0; i--){
      if (arr[i]<9){
        arr[i]+=1;
        return arr;
      }
      arr[i]=0;
    }
    arr.unshift(1);
    
    return arr;
  }