/*!
 * Check if two arrays are equal
 * @param  {Array}   arr1 The first array
 * @param  {Array}   arr2 The second array
 * @return {Boolean}      If true, both arrays are equal
 */
var arraysMatch = function (arr1, arr2) {
    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;

    // Check if all the items exist and are in the same order
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    // Otherwise, return true
    return true;
};