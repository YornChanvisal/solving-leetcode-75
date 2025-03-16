/*
    You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

    Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
    return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

    Example 1:
    Input: flowerbed = [1,0,0,0,1], n = 1
    Output: true

    Example 2:
    Input: flowerbed = [1,0,0,0,1], n = 2
    Output: false
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let plantablePlots = 0;

    flowerbed.unshift(0);
    flowerbed.push(0);

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
            plantablePlots++;
            i++;
        }
    }

    return n <= plantablePlots;
};

console.log(canPlaceFlowers([1,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,0,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([0,0,1,0,0], 1)); // true
console.log(canPlaceFlowers([0,0,1,0,0], 2)); // true
console.log(canPlaceFlowers([1,0,0,0,0,1], 3)); // false
console.log(canPlaceFlowers([1,0,0,1,0,0], 2)); // false
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 0)); // true
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2)); // true
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 3)); // false

// Time Complexity: O(n)

// Better Solution: no modify input array and no need to check more than plots needed
/*
    var canPlaceFlowers = function(flowerbed, n) {
        let plantablePlots = 0;

        for (let i = 0; i < flowerbed.length; i++) {
            if (flowerbed[i] == 0 && 
                (i == 0 || flowerbed[i - 1] == 0) && 
                (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {

                plantablePlots++;
                flowerbed[i] = 1; // Plant flower
                i++; // Skip next plot
            }

            if (plantablePlots >= n) return true; // Early exit if enough flowers are placed
        }

        return plantablePlots >= n;
    };
*/