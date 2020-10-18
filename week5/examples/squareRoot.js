function squareRoot(number) {
    'use strict';
    if(number < 0) {
        throw new RangeError('You cannot find the square root of a negative number.')
    }
    return Math.sqrt(number);
};