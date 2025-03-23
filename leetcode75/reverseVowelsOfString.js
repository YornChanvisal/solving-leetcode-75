/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation: The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let sArr = s.split("");
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let left = 0, right = sArr.length - 1;

    while (left < right) {
        if (vowels.includes(sArr[left]) && vowels.includes(sArr[right])) {
            let temp = sArr[left];
            sArr[left] = sArr[right];
            sArr[right] = temp;
            left++;
            right--;
        } else if (vowels.includes(sArr[left])) {
            right--;
        } else {
            left++;
        }
    }

    /*
        while (left < right) {
            while (!vowels.includes(sArr[left])) left++;
            while (!vowels.includes(sArr[right])) right--;
            
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]]; // ES6
            left++;
            right--;
        }
    */

    return sArr.join("");
};

console.log(reverseVowels("IceCreAm")); // "AceCreIm"
console.log(reverseVowels("leetcode")); // "leotcede"
console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("aA")); // "Aa"
console.log(reverseVowels("bakedpOt")); // "bOkedpat"

// Time Complexity: O(n)
// Note: Using set() for vowels will be faster than array.includes() method. set().has() is O(1) while array.includes() is O(n).