/*!
 * Convert a timestamp into a date
 * @param   {String|Integer}  timestamp  The timestamp in unix of YYYY-MM-DD HH:MM:SS format
 * @returns {String}                     A formatted date
 */
var formatDate = function (timestamp) {
    // Create a date object from the timestamp
    var date = new Date(timestamp);

    // Create a list of names for the months
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

    // return a formatted date
    return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
};