class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let answer: number[] = [];
        let prefix: number[] = [];
        let suffix: number[] = [];

        for (let i: number = 0; i < nums.length; i++) {
            if (i === 0) {
                prefix.push(nums[i]);
                continue;
            }

            prefix.push(nums[i] * prefix[i - 1]);
        }

        for (let i: number = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                suffix[i] = nums[i];
                continue;
            }

            suffix[i] = nums[i] * suffix[i + 1];
        }

        for (let i: number = 0; i < nums.length; i++) {
            if (i === 0) {
                answer[i] = 1 * suffix[i + 1];
                continue;
            }

            let toMultiply: number = suffix[i + 1] ?? 1;

            answer[i] = toMultiply * prefix[i - 1];
        }

        return answer;
    }
}
