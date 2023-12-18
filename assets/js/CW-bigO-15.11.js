const numb=[1,3,45,4,5]

// O(n) - константна складність 
const funO = (numbs, val)=>{ 
  for (let i = 0; i<numbs.length; i++){
    if (numbs[i]===val){
      return i
    }
  }
  return -1;
  }

console.log(funO(numb, 3));