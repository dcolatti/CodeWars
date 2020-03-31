//Sum of Positive

/* 
Link: https://www.codewars.com/kata/sum-of-positive
Instruction:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20 */


https: function positiveSum(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			sum += arr[i];
		}
	}
	return sum;
}
