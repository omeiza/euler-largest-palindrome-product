// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(num) {
    const numStr = num.toString(),
        numStrLength = numStr.length;

    // Loop
    for (let i = 0; i < numStrLength / 2; i++) {
        if (numStr[i] != numStr[numStrLength - 1 - i]) {
            return false;
        }
    }

    return true;
}

// Let's use IIFE :)
(function() {
    // Loop
    // 3 digits start at 100 and ends at 999
    let palindromeStash = 0;

    for (let i = 100; i < 1000; i++) {
        for (let k = 100; k < 1000; k++) {
            let numProduct = i * k;
            if (isPalindrome(numProduct)) {
                if (numProduct > palindromeStash) {
                    palindromeStash = numProduct;
                }
            }
        }
    }

    return palindromeStash;
})();