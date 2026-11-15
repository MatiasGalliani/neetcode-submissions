class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let words = new Map<string, string[]>();

        for (const word of strs) {
            const sortedStr: string = word.split("").sort().join("");

            if (!words.has(sortedStr)) {
                words.set(sortedStr, []);
            }

            words.get(sortedStr)!.push(word);
        }

        return Array.from(words.values());
    }
}
