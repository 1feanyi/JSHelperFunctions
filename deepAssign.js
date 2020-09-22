/*!
 * Deep merge two or more objects into the first.
 * @param   {Object} objects  The objects to merge together
 * @returns {Object}          Merged values of defaults and options
 */
var deepAssign = function () {
    // Make sure there are objects to merge
    var len = arguments.length;
    if (len < 1) return;
    if (len < 2) return arguments[0];

    // Merge all objects into first
    for (var i = 0; i < len; i++) {
        for (var key in arguments[1]) {
            // If it's an object, recursively merge
            // Otherwise, push to key
            if (Object.prototype.toString.call(arguments[1][key]) === '[object Object]') {
                arguments[0][key] = deepAssign(arguments[0][key] || {}, arguments[i][key]);
            } else {
                arguments[0][key] = arguments[i][key];
            }
        }
    }

    return arguments[0];
};

/** Example Usage
********************
    var obj1 = {
        sandwich: 'chicken',
        condiment: 'mayo',
        desert: true,
        days: {
            monday: true,
            wednesday: true,
            friday: true
        }
    };

    var obj2 = {
        sandwich: 'tuna',
        chips: 'Cape Cod',
        desert: false,
        days: {
            monday: false,
            tuesday: true,
            thursday: true
        }
    };

    var shallow = Object.assign({}, obj1, obj2);
    var deep = deepMerge(obj1, obj2);

    console.log(shallow);
    console.log(deep);
 */