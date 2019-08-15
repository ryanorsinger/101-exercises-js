// Keep this function definition in order to test expected vs. actual results
const assert = function(actual, expected, message = "") {
    if (actual !== expected) {
        throw Error("Assert failed. The expected and actual values are not the same. " + message);
    }
};
