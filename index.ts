/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * Reference: https://projecteuler.net/problem=4
 */

function palindromeProduct(from: number, to: number): number  {
	function isPalindrome(input): boolean {
		let inputString: string = input.toString();

		for (let i = 0; i < inputString.length / 2; i++) {
			if (inputString[i] != inputString[inputString.length - i - 1]) return false;
		}

		return inputString.length > 1;
	}

	const stash = [];
	for (let i = from; i < to; i++) {
		for (let k = from; k < to; k++) {
			let product = i * k;

			if (isPalindrome(product)) stash.push(product);
		}
	}

	return Math.max(...stash);
}

console.log(palindromeProduct(100, 1000));