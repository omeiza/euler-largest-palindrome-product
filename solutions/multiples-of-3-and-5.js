// Problem: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Solution: 

function getSumOfMultiples(limit) {
    // confirm limit is a number 
    if (typeof limit !== "number") return "The parameter supplied for fn getSumOfMultiples must be a valid number";

    let sumOfMultiples = 0;
    for (let x = 1; x < limit; x++) {
        if ((x % 3 === 0) || (x % 5 === 0)) {
            sumOfMultiples = sumOfMultiples + x;
        }
    }

    return sumOfMultiples;
}

// Test
// console.log(getSumOfMultiples(1000));