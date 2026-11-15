class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let mapS = new Map<string, number>();
        let mapT = new Map<string, number>();

        const addCount = (arr: string, map: Map<string, number>) => {
            for (const letter of arr) {
                const currentCount = map.get(letter) ?? 0;
                map.set(letter, currentCount + 1)
            }
        }

        addCount(s, mapS);
        addCount(t, mapT);

        if (mapS.size !== mapT.size) return false

        for (const [key, value] of mapS) {
            if (!mapT.has(key) || mapT.get(key) !== value) {
                return false;
            }
        }

        return true;
    };

}
