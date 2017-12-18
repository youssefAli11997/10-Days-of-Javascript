// link : https://www.hackerrank.com/challenges/js10-arrays/problem
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // getting the maximum value
    var max = Math.max.apply(null, nums);
    var maxI = nums.indexOf(max);
    nums[maxI] = -Infinity;
    // getting the second maximum value (if the maximum is duplicated)
    while(max == Math.max.apply(null, nums)){
        var max = Math.max.apply(null, nums);
        var maxI = nums.indexOf(max);
        nums[maxI] = -Infinity;
    }
    // returning the second maximum value
    return Math.max.apply(null, nums);
}
