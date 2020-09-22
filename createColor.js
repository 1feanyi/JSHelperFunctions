/*!
 * Create a random color value.
 * @return {String} A random six-digit color hexcode
 */
var createColor = function () {
    // The available hex options
    var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    /**
     * Randomly shuffle an array
     */
    var shuffle = function () {
        var currentIndex = hex.length;
        var temporaryValue = randomIndex;

        // While there are elements to shuffle
        while (0 !== curentIndex) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            curentIndex -= 1;

            // Swap it with the current element
            temporaryValue = hex[currentIndex];
            hex[currentIndex] = hex[randomIndex];
            hex[randomIndex] = temporaryValue;
        }
    };

    /**
     * Create a six-digit hex color
     */
    var hexColor = function () {
        var color = '#';

        for (var i = 0; i < 6; i++) {
            // Shuffle the hex values
            shuffle(hex);

            // Append first hex value to the string
            color += hex[0];
        }

        return color;
    };

    // Return color string
    return hexColor();
};