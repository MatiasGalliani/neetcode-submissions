class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let answer: number[] = [];

        for (let i: number = 0; i < nums.length; i++) {
            if (i === 0) {
                answer[i] = 1;
                continue;
            }

            answer[i] = answer[i - 1] * nums[i - 1];
        }

        let postfix = 1;

        for (let i: number = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                postfix = nums[i];
                continue;
            } else {
                answer[i] = answer[i] * postfix;
                postfix *= nums[i];
            }
        }

        return answer;
    }
}
