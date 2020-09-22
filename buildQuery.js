/*!
 * Build a query string from an object of data
 * @param  {Object} data The data to turn into a query string
 * @return {String}      The query string
 */

var buildQuery = function (data) {
    if (typeof (data) === 'string') return data;
    var query = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
    }
    return query.join('&');
}