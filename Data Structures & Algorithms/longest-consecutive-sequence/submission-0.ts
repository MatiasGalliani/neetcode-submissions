class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let longest: number = 0;
        let numSet = new Set<number>(nums);

        for (const num of numSet.values()) {
            if (!numSet.has(num - 1)) {
                let length: number = 0;
                while (numSet.has(num + length)) {
                    length++;
                }

                if (length > longest) {
                    longest = length;
                }
            }
        }

        return longest;
    }
}
