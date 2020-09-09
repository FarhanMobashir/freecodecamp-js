function isprime(n) {
    for (let i = Math.floor(n/2); i > 1;i--) {
      if(n % i === 0) {
        return false;
      } 
  }
  return true;
  }
  
  function sumPrimes(num) {
    let sum = 0;
    for(let i =2; i <= num; i++) {
      if(isprime(i)) {
         sum = sum + i
        }
    }
    return sum;
  }
  
  console.log(sumPrimes(977));
  