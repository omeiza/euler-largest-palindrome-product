//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(originalTarget){
  if ((typeof originalTarget !== "number" || originalTarget === 0)){
    return "Arguments supplied to fn fiboEvenAdd must a natural integer";
  }

  var target = originalTarget;
  var i = 2;
  while(i<target) {

  	while(target%i === 0) {

  			(function(newtarget) {
  					target = newtarget;
  			 })(target / i)
  		}
  					i++;
  	}
    return target;
}

// Test
// console.log(largestPrimeFactor(600851475143));
