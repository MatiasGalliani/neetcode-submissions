class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let frequency = new Map<number, number>();
        let result: number[] = [];

        for (const num of nums) {
            if (!frequency.has(num)) {
                frequency.set(num, 0);
            } else {
                let getValue: number = frequency.get(num);
                frequency.set(num, getValue + 1);
            }
        }

        const sortedDesc = [...frequency.entries()].sort((a, b) => b[1] - a[1]);

        for (let i: number = 0; i < k; i++) {
            let toPush: number = sortedDesc[i][0];
            result.push(toPush);
        }

        return result;
    }
}

/*
--- top k frequent elements ---

example 1: 

input: nums = [1, 2, 2, 3, 3, 3];
output: [2, 3] = [3, 2]

-- explanation --
we need to find the 2 most frequent numbers

2 is because we find the number 2 two times
3 is because we find the number 3 three times

and 1 is not included because it's the third most frequent

-- attempt --
create hashmap => store as key, the number and then as value, the frequency

-- array - matrix approach --> NOT EFFICIENT 
[[num, frequency], [num, frequency], [num, frequency]] => O (n)

[[1, 1], [2, 2], [3, 3]]; => O(n^2)

[[3, 3], [2, 2], [1, 1]]; 

return => [3, 2] => O(k)

O(n + n^2 + k)
*/
