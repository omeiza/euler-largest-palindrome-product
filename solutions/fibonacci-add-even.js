// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function fiboAddEven(start, limit) {
    if ((typeof start !== "number" || start === 0) || typeof limit !== "number") return "Arguments supplied to fn fiboEvenAdd must a natural integer";

    var fibArray = [];
    fibArray.push(start);

    for (let i = 1; i < limit; i++) {
        let former = fibArray[fibArray.length - 2],
        later = fibArray[fibArray.length - 1];

        // add first item (1) to itself
        if (fibArray.length == 1) former = later;

        // check if last two items add up to exceed limit
        if ((former + later) > limit) break;

        fibArray.push(former + later);
    }

    // filter out all items that are even and add them up
    var result = 0;
    fibArray.forEach(function(eachItem){
        if (eachItem % 2 === 0) result += eachItem;
    });

    return result;
}

// Test
// console.log(fiboAddEven(1, 4000000));
