class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result: string[] = [];
        const nonAscii: string = "ñ";

        for (let i: number = 0; i < strs.length; i++) {
            let elementLength: number = strs[i].length;
            let eleLength: string = elementLength.toString();
            result.push(eleLength);
            result.push(nonAscii);
            result.push(strs[i]);
        }

        return result.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const nonAscii: string = "ñ";
        let result: string[] = [];
        let start: number = 0;

        for (let i: number = 0; i < str.length; i++) {
            if (str[i] === nonAscii) {
                const len: number = +str.slice(start, i);
                console.log(`len is ${len}`);
                let left: number = +i + 1;
                let right: number = +len + i + 1;
                start = right;

                console.log(`The sides are left: ${left} and right: ${right}`);

                result.push(str.slice(left, right));

                i = right - 1;
            }
        }

        return result;
    }
}

/*
--- encode function ---

input: strs = ['Hello', 'World'];
output: '5Hello(NON-ASCII)5World(NON-ASCII)';

--- decode function ---
input: str = '5Hello(NON-ASCII)5World(NON-ASCII)';
output: ['Hello', 'World'];

--- constraints ---

the length of strs can be 0 up to 99
the length of each element of strs can be 0, and up to 199

['Hello', 'World'] => obtain the length of the element = 5 => push that number to the result array => then the element => then a non ascii character => AND THEN AGAIN...

 'Hello'
*/
