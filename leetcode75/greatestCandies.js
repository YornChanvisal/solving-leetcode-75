/*
    There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, 
    and an integer extraCandies, denoting the number of extra candies that you have.
    Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, 
    they will have the greatest number of candies among all the kids, or false otherwise.

    (Note that multiple kids can have the greatest number of candies.)

    Example 1:
    Input: candies = [2,3,5,1,3], extraCandies = 3
    Output: [true,true,true,false,true] 
    Explanation: If you give all extraCandies to:
    - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
    - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
    - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
    - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
    - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
    
    Example 2:
    Input: candies = [4,2,1,1,2], extraCandies = 1
    Output: [true,false,false,false,false] 
    Explanation: There is only 1 extra candy.
    Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let max = Math.max(...candies);

    candies.forEach (candy => result.push(candy + extraCandies >= max));

    return result;
};

console.log(kidsWithCandies([2,3,5,1,3,1], 3)); //[true,true,true,false,true, false]
console.log(kidsWithCandies([4,2,1,1,2], 1)); //[true,false,false,false,false]

// Time Complexity: O(n)

/*
    Alternate Solution: Using map()

    var kidsWithCandies = function(candies, extraCandies) {
        let max = Math.max(...candies);
        return candies.map(candy => candy + extraCandies >= max);
    };

    - This solution conveys better context, the purpose of map() is to tranforms the array elements and return a new array. 
    - While forEach() is used to iterate over the array elements and perform some operation on them, more like side-effect.
*/