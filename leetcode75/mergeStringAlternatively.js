/* 
    Problem: You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
    If a string is longer than the other, append the additional letters onto the end of the merged string.
    Return the merged string.

    Example 1:
    Input: word1 = "abc", word2 = "pqr"
    Output: "apbqcr"

    Example 2:
    Input: word1 = "ab", word2 = "pqrs"
    Output: "apbqrs"

    Example 3:
    Input: word1 = "abcd", word2 = "pq"
    Output: "apbqcd"
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < word1.length && j < word2.length) {
        merged.push(word1[i], word2[j]);
        i++;
        j++;
    }

    if (i < word1.length) merged.push(...word1.slice(i));
    if (j < word2.length) merged.push(...word2.slice(j));

    return merged.join("");
};

console.log(mergeAlternately("abc", "pqr")); //apbqcr
console.log(mergeAlternately("ab", "pqrs")); //apbqrs
console.log(mergeAlternately("abcd", "pq")); //apbqcd

// Time Complexity: O(n)
// Note: This approach using array instead of String Concatenation. It is more efficient. Because Concatenation of String needs to create a new string every time.