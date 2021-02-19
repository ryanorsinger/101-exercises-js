// These example functions live at https://gist.github.com/ryanorsinger/e843c7d0966993bd8193f0afabe16ae0

function isTwo(x) {
    return x == 2;
}



function isNotTwo(n) {
    return n != 2;
}



function not(x) {
    return !x;
}



function notNot(x) {
    return !!x;
}



function isEmptyString(str) {
    return str == "";
}



function aintEmptyString(str) {
    return str != "";
}



function isTheLetterA(str) {
    str = str.toLowerCase();
    return str == "a";
}



function isPorQ(x) {
    x = x.toLowerCase();
    return x == "p" || x == "q";
}



function isLessThanFive(x) {
    return x < 5;
}



function isGreaterThanFive(x) {
    return x > 5;
}



function isGreaterThanOrEqualToFive(x) {
    return x >= 5;
}




function betweenTenAndTwenty(x) {
    return 10 < x && x < 20;
}



function is6or12(x) {
    return x === 6 || x == 12;
}

