/*!
 * Emit a custom event
 * @param  {String} type   The event type
 * @param  {Node}   elem   The element to attach the event to
 * @param  {Object} detail Any details to pass along with the event
 */
var emitEvent = function (type, elem, detail) {
    // Make sure there's an event type
    if(!type) return;

    // Variables
    elem = elem || window;
    detail = detail || {};

    // Create a new event
    var event = new CustomEvent(type, {
        bubbles: true,
        cancelable: true,
        detail: detail
    });

    // Dispatch the event
    elem.dispatchEvent(event);
};