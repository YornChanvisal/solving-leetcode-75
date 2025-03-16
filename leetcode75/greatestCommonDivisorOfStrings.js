/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

/* 
Problem: For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/

var gcdOfStrings = function(str1, str2) {
    // Check if str1 + str2 == str2 + str1 (ensures they have a common divisor structure)
    if (str1 + str2 !== str2 + str1) return "";

    // Find the GCD of the lengths of str1 and str2
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    let gcdLen = gcd(str1.length, str2.length);

    // Return the substring of length gcdLen from str1
    return str1.substring(0, gcdLen);
};

console.log(gcdOfStrings("ABCABC", "ABC")); //ABC
console.log(gcdOfStrings("ABABAB", "ABAB")); //AB
console.log(gcdOfStrings("LEET", "CODE")); //""
console.log(gcdOfStrings("ABCDEF", "ABC")); //""
console.log(gcdOfStrings("ABC", "ABCDEF")); //""
console.log(gcdOfStrings("ABC", "ABC")); //ABC
console.log(gcdOfStrings("ABC", "ABCABCABC")); //ABC
console.log(gcdOfStrings("ABAB", "ABAB")); //ABAB

// Time Complexity: O(n)
// Note: This approach is the most efficient because it uses the GCD of the lengths of str1 and str2 to find the common divisor.

/*
    // Arrow function
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    // Regular function
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
*/