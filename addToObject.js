/*!
 * Add a new item to an object
 * @param  {Object} obj   The original object
 * @param  {String} key   The key for the item to add
 * @param  {Any}    value The value for the new key to add
 * @param  {Number} index The position in the object to add the new key/value pair [optional]
 * @return {Object}       An immutable clone of the original object, with the new key/value pair added
 */
var addToObject = function (obj, key, value, index) {
    // Create a temp object and index variable
    var temp = {};
    var i = 0;

    // Loop through the original object
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            // If the indexes match, add the new item
            if (i === index && key && value) {
                temp[key] = value;
            }
            
            // Add the current item in the loop to the temp obj
            temp[prop] = obj[prop];

            // Increase the count
            i++;
        }
    }

    // If no index, add to the end
    if (!index && key) {
        temp[key] = value;
    }

    return temp;
};