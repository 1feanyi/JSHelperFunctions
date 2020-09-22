/*!
 * Get an array of all matching elements in the DOM
 * @param  {String} selector The element selector
 * @param  {Node}   parent   The parent to search in [optional]
 * @return {Array}           Th elements
 */
var $$ = function (selector, parent) {
    return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
};