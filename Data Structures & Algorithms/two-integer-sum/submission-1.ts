class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let seen = new Map<number, number>
        let result: number[] = []

        for (let i: number = 0; i < nums.length; i++) {
            seen.set(nums[i], i)
        }

        for (let i: number = 0; i < nums.length; i++) {
            let complement: number = target - nums[i]
            let complementIndex: number = seen.get(complement)

            if (seen.has(complement) && i !== complementIndex) {
                const returnArr = [i, complementIndex]
                return returnArr
            }
        }
    }
}
