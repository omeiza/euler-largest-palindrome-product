// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

// Define prime factors: Well, they are factors of a number that are prime. i.e prime are numbers that are divisible by 1 and itself

// Solution
const primeFactorOps = {};

primeFactorOps.cache = [];

primeFactorOps.isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return num > 1;
}

primeFactorOps.productOfArrayValues = (arr) => {
    if (arr.length <= 1) return false;
    const product = arr.reduce((prev, current) => {
        return prev * current;
    }, 1);
    
    return product;
}

primeFactorOps.getPrimeFactor = (value, start) => {
    // For loop
    for (let i = start; i < value; i++) {
        if (value % i === 0 && primeFactorOps.isPrime(i)) {
            primeFactorOps.cache.push(i);
            primeFactorOps.getPrimeFactor(value / i, i);
            break;
        }
    }

    return false;
}

primeFactorOps.getLargestPrimeFactor = (value) => {
    // (re)empty cache
    primeFactorOps.cache = [];

    // Ensure the number we are using isn't a prime number or an even number
    if (primeFactorOps.isPrime(value) || value % 2 == 0) return "You can't use a prime or even number for this";

    if (!primeFactorOps.getPrimeFactor(value, 2)) {
        // Get the final prime factor
        // Product of prev prime factor(s)
        const productPrevPrimeFactors = primeFactorOps.productOfArrayValues(primeFactorOps.cache);
        if (productPrevPrimeFactors && value % productPrevPrimeFactors == 0) {
            primeFactorOps.cache.push(value / productPrevPrimeFactors);
        }

        return `The prime factor of ${value} are ${primeFactorOps.cache}, and the max is ${Math.max(...primeFactorOps.cache)}`;
    }

    return `${value} does have any prime factor`;
}

primeFactorOps.getLargestPrimeFactor(13195);