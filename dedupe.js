/*!
 * Remove duplicate items from an array
 * @param  {Array} arr The array
 * @return {Array}     A new array with duplicates removed
 */
var dedupe = function (arr) {
    return arr.filter(function (item, index) {
        return arr.indexOf(item) === index;
    });
};