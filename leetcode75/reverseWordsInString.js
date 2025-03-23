/*
    Given an input string s, reverse the order of the words.
    A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
    Return a string of the words in reverse order concatenated by a single space.

    Note that s may contain leading or trailing spaces or multiple spaces between two words. 
    The returned string should only have a single space separating the words. Do not include any extra spaces.

    Example 1:
    Input: s = "the sky is blue"
    Output: "blue is sky the"

    Example 2:
    Input: s = "  hello world  "
    Output: "world hello"
    Explanation: Your reversed string should not contain leading or trailing spaces.

    Example 3:
    Input: s = "a good   example"
    Output: "example good a"
    Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.trim().split(/\s+/);

    let left = 0, right = sArr.length-1;

    while (left < right) {
        [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
        left++;
        right--;
    }

    return sArr.join(" ");
};

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"
console.log(reverseWords("  Bob    Loves  Alice   ")); // "Alice Loves Bob"
console.log(reverseWords("Alice does not even like bob")); // "bob like even not does Alice"
console.log(reverseWords("   ")); // ""

// Time Complexity: O(n)

/* 
    Better and Precise Solution: 
    
    var reverseWords = function(s) {
        var str =s.trim().split(/\s+/);
        s="";
        for(var i=0; i<str.length;i++){
            s+=str[str.length-1-i];
            if(i!=(str.length-1)){
                s+=" ";
            }   // add space if it is not the last word
        }
        return s;
    };
*/