/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9.
 * The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000
 * Reference: https://projecteuler.net/problem=1
 */

// For general purpose, it is useful to create a function that takes a parameter as limit of multiples
function sumOfMultiples(limit: number): number {
	let total = 0;

	for (let x = 1; x < limit; x++) {
		if ((x % 3 === 0) || (x % 5 === 0)) {
			total = total + x;
		}
	}

	return total;
}

// Call function with limit 1000
console.log(sumOfMultiples(1000));