import {describe, test, expect} from "@jest/globals";
import palindromeProduct from "./index";

describe("The palindrome product", () => {
	test("The largest palindrome made from the product of two 2-digit numbers", () => {
		expect(palindromeProduct(10, 99)).toEqual(9009);
	});

	test("The largest palindrome made from the product of two 3-digit numbers", () => {
		expect(palindromeProduct(100, 999)).toEqual(906609);
	});
})