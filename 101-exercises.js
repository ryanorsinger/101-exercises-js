"use strict"; // leave this line here!

// Welcome to 101 Exercises in JS
// If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns the boolean value true
// To complete Exercise #0, uncomment the following line of JS
// var doingJSRightNow = true

// The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
assert(doingJSRightNow, true, "a variable holding a true boolean value should be equal to true"); 
addToDone("Exercise 0 is correct");


//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false

assert(onMarsRightNow, false, "If you see a Reference Error, be sure to create the variable and assign it a value.");
addToDone("Exercise 1 is correct.");

// Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.

assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry"], "Ensure the variable contains all the strings in the provided order");
addToDone("Exercise 2 is correct.");

//  Exercise 3
//  Create a variable named vegetables and assign it an array of fruits containing the following vegetable names as strings: 
//  eggplant, broccoli, carrot, cauliflower, and zucchini

assert(vegetables, ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"], "Ensure the variable contains all the strings in the provided order");
addToDone("Exercise 3 is correct.");


// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Ensure the variable contains the numbers 1-10 in order.");
addToDone("Exercise 4 is correct.");


// Exercise 5
// Add the string "tomato" to the end of the fruits array. 
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.

assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Ensure the variable contains all the strings in the right order");
addToDone("Exercise 5 is correct");

// Exercise 6
// Given the following assignment of the vegetables array, add "tomato" to the end of the array. 
// Recommend using the built-in JS operation to add to an array.


assert(vegetables,["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Ensure the variable contains all the strings in the provided order");
addToDone("Exercise 6 is correct")


// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above. 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


assert(numbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "An Error means that the answer is incorrect.")
addToDone("Exercise 7 is correct")



// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method

assert(vegetables, ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'])
addToDone("Exercise 8 is correct.")



// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order

assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'])
addToDone("Exercise 9 is correct.")


// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies

assert(fruitsAndVeggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'])
addToDone("Exercise 10 is correct")

// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();

// Writing functions
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions for help with writing functions
// Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.


// Example function defintion:
// Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
function sayHello(name) {
    return "Hello, " + name + "!";
}

assert(sayHello("Jane"), "Hello, Jane!");
assert(sayHello("Pat"), "Hello, Pat!");
assert(sayHello("Astrud"), "Hello, Astrud!");
assert(sayHello("June"), "Hello, June!");
assert(sayHello("World"), "Hello, World!");


// Heres another example function definition
// This plusTwo function takes in a variable and adds the number 2 to it.
function addTwo(x) {
    return x + 2;
}

assert(plusTwo(3), 5, "3 plus 2 is five")
assert(plusTwo(-2), 0, "-2 plus 2 is zero")
assert(plusTwo(0), 2, "zero plus 2 is two")



// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one



assert(addOne(2), 3, "Ensure that the function is defined, named properly, and returns the correct value");
assert(addOne(0), 1, "Zero plus one is one.");
assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Ensure that the function is defined, named properly, and returns the correct value");
assert(addOne(negativeOddNumber), negativeOddNumber + 1, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 11 is correct.")


// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.



assert(isPositive(positiveOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isPositive(positiveEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isPositive(negativeOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isPositive(negativeEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 12 is correct.")


// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.



assert(isNegative(positiveOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isNegative(positiveEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isNegative(negativeOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isNegative(negativeEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 13 is correct.")


// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.

assert(isOdd(positiveOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isOdd(positiveEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isOdd(negativeOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isOdd(negativeEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 14 is correct.")

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.

assert(isEven(2), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(positiveOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(positiveEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(negativeOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(negativeEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 15 is correct.")


// Exercise 16
// Write a function definition named identity that takes in any argument and returns that argument's value. Don't overthink this one!

assert(identity(fruits), fruits, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(vegetables), vegetables, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(positiveOddNumber), positiveOddNumber, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(positiveEvenNumber), positiveEvenNumber, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(negativeOddNumber), negativeOddNumber, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(negativeEvenNumber), negativeEvenNumber, "Ensure that the function is defined, named properly, and returns the correct value");
addToDone("Exercise 16 is correct.")


// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd



assert(isPositiveOdd(3), true, "Double check your syntax and logic" );
assert(isPositiveOdd(positiveOddNumber), true, "Double check your syntax and logic");
assert(isPositiveOdd(positiveEvenNumber), false, "Double check your syntax and logic");
assert(isPositiveOdd(negativeOddNumber), false, "Double check your syntax and logic");
assert(isPositiveOdd(negativeEvenNumber), false, "Double check your syntax and logic");
addToDone("Exercise 17 is correct.")


// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even

assert(isPositiveEven(4), true, "Double check your syntax and logic" );
assert(isPositiveEven(positiveOddNumber), false, "Double check your syntax and logic");
assert(isPositiveEven(positiveEvenNumber), true, "Double check your syntax and logic");
assert(isPositiveEven(negativeOddNumber), false, "Double check your syntax and logic");
assert(isPositiveEven(negativeEvenNumber), false, "Double check your syntax and logic");
addToDone("Exercise 18 is correct.")


// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.

assert(isNegativeOdd(-3), true, "Double check your syntax and logic" );
assert(isNegativeOdd(positiveOddNumber), false, "Double check your syntax and logic");
assert(isNegativeOdd(positiveEvenNumber), false, "Double check your syntax and logic");
assert(isNegativeOdd(negativeOddNumber), true, "Double check your syntax and logic");
assert(isNegativeOdd(negativeEvenNumber), false, "Double check your syntax and logic");
addToDone("Exercise 19 is correct.")


// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.

assert(isNegativeEven(-4), true, "Double check your syntax and logic" );
assert(isNegativeEven(positiveOddNumber), false, "Double check your syntax and logic");
assert(isNegativeEven(positiveEvenNumber), false, "Double check your syntax and logic");
assert(isNegativeEven(negativeOddNumber), false, "Double check your syntax and logic");
assert(isNegativeEven(negativeEvenNumber), true, "Double check your syntax and logic");
addToDone("Exercise 20 is correct.")



// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.

assert(half(4), 2);
assert(half(5), 2.5);
assert(half(positiveOddNumber), positiveOddNumber / 2);
assert(half(positiveEvenNumber), positiveEvenNumber / 2);
assert(half(negativeOddNumber), negativeOddNumber / 2);
assert(half(negativeEvenNumber), negativeEvenNumber / 2);
addToDone("Exercise 21 is correct.")



// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.

assert(double(4), 8)
assert(double(5), 10)
assert(double(positiveOddNumber), positiveOddNumber * 2)
assert(double(positiveEvenNumber), positiveEvenNumber * 2)
assert(double(negativeOddNumber), negativeOddNumber * 2)
assert(double(negativeEvenNumber), negativeEvenNumber * 2)
addToDone("Exercise 22 is correct.")



// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.

assert(triple(4), 12);
assert(triple(5), 15);
assert(triple(positiveOddNumber), positiveOddNumber * 3);
assert(triple(positiveEvenNumber), positiveEvenNumber * 3);
assert(triple(negativeOddNumber), negativeOddNumber * 3);
assert(triple(negativeEvenNumber), negativeEvenNumber * 3);
addToDone("Exercise 23 is correct.")



// Exercise 24
// Write a function definition named reverse_sign that takes in a number and returns the provided number but with the sign reversed.

assert(reverse_sign(4), -4);
assert(reverse_sign(-5), 5);
assert(reverse_sign(positiveOddNumber), positiveOddNumber * -1);
assert(reverse_sign(positiveEvenNumber), positiveEvenNumber * -1);
assert(reverse_sign(negativeOddNumber), negativeOddNumber * -1);
assert(reverse_sign(negativeEvenNumber), negativeEvenNumber * -1);
addToDone("Exercise 24 is correct.")



// Exercise 25
// Write a function definition named absolute_value that takes in a number and returns the absolute value of the provided number

assert(absolute_value(4), 4);
assert(absolute_value(-5), 5);
assert(absolute_value(positiveOddNumber), positiveOddNumber);
assert(absolute_value(positiveEvenNumber), positiveEvenNumber);
assert(absolute_value(negativeOddNumber), negativeOddNumber * -1);
assert(absolute_value(negativeEvenNumber), negativeEvenNumber * -1);
addToDone("Exercise 25 is correct.")



// Exercise 26
// Write a function definition named is_multiple_of_three that takes in a number and returns true or false if the number is evenly divisible by 3.

assert(is_multiple_of_three(3), true);
assert(is_multiple_of_three(15), true);
assert(is_multiple_of_three(9), true);
assert(is_multiple_of_three(4), false);
assert(is_multiple_of_three(10), false);
addToDone("Exercise 26 is correct.")




// Exercise 27
// Write a function definition named is_multiple_of_five that takes in a number and returns true or false if the number is evenly divisible by 5.

assert(is_multiple_of_five(3), false);
assert(is_multiple_of_five(15), true);
assert(is_multiple_of_five(9), false);
assert(is_multiple_of_five(4), false);
assert(is_multiple_of_five(10), true);
addToDone("Exercise 27 is correct.")



// Exercise 28
// Write a function definition named is_multiple_of_both_three_and_five that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.

assert(is_multiple_of_both_three_and_five(15), true);
assert(is_multiple_of_both_three_and_five(45), true);
assert(is_multiple_of_both_three_and_five(3), false);
assert(is_multiple_of_both_three_and_five(9), false);
assert(is_multiple_of_both_three_and_five(4), false);
addToDone("Exercise 28 is correct.")




// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.

assert(square(3), 9);
assert(square(2), 4);
assert(square(9), 81);
assert(square(positiveOddNumber), positiveOddNumber * positiveOddNumber);
addToDone("Exercise 29 is correct.")



// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.


assert(add(3, 2), 5);
assert(add(10, -2), 8);
assert(add(5, 7), 12);
addToDone("Exercise 30 is correct.")



// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.

assert(cube(3), 27);
assert(cube(2), 8);
assert(cube(5), 125);
assert(cube(positiveOddNumber), positiveOddNumber * positiveOddNumber * positiveOddNumber);
addToDone("Exercise 31 is correct.")



// Exercise 32
// Write a function definition named square_root that takes in a number and returns the square root of the provided number


assert(square_root(4), 2.0);
assert(square_root(64), 8.0);
assert(square_root(81), 9.0);
addToDone("Exercise 32 is correct.")




// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.


assert(subtract(8, 6), 2);
assert(subtract(27, 4), 23);
assert(subtract(12, 2), 10);
addToDone("Exercise 33 is correct.")



// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.

assert(multiply(2, 1), 2);
assert(multiply(3, 5), 15);
assert(multiply(5, 2), 10);
addToDone("Exercise 34 is correct.")



// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.


assert(divide(27, 9), 3);
assert(divide(15, 3), 5);
assert(divide(5, 2), 2.5);
assert(divide(10, 2), 5);
addToDone("Exercise 35 is correct.")


// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns only the quotient first argument quotient by the second argument.

assert(quotient(27, 9), 3)
assert(quotient(5, 2), 2)
assert(quotient(10, 3), 3)
addToDone("Exercise 36 is correct.")


// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

assert(remainder(3, 3), 0);
assert(remainder(5, 2), 1);
assert(remainder(7, 5), 2);
addToDone("Exercise 37 is correct.")



// Exercise 38
// Write a function definition named sum_of_squares that takes in two numbers, squares each number, then returns the sum of both squares.

assert(sum_of_squares(3, 2), 13);
assert(sum_of_squares(5, 2), 29);
assert(sum_of_squares(2, 4), 20);
addToDone("Exercise 38 is correct.")



// Exercise 39
// Write a function definition named times_two_plus_three that takes in a number, multiplies it by two, adds 3 and returns the result.

assert(times_two_plus_three(0), 3);
assert(times_two_plus_three(1), 5);
assert(times_two_plus_three(2), 7);
assert(times_two_plus_three(3), 9);
assert(times_two_plus_three(5), 13);
addToDone("Exercise 39 is correct.")


// Exercise 40
// Write a function definition named area_of_rectangle that takes in two numbers and returns the product.

assert(area_of_rectangle(1, 3), 3);
assert(area_of_rectangle(5, 2), 10);
assert(area_of_rectangle(2, 7), 14);
assert(area_of_rectangle(5.3, 10.3), 54.59);
addToDone("Exercise 40 is correct.")



// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle


assert(areaOfCircle(3), 28.274333882308138);
assert(areaOfCircle(5), 78.53981633974483);
assert(areaOfCircle(7), 153.93804002589985);
addToDone("Exercise 41 is correct.")


// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.

assert(circumference(3), 18.84955592153876);
assert(circumference(5), 31.41592653589793);
assert(circumference(7), 43.982297150257104);
addToDone("Exercise 42 is correct.")



// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.

assert(isVowel("a"), true);
assert(isVowel("U"), true);
assert(isVowel("banana"), false);
assert(isVowel("Q"), false);
assert(isVowel("y"), false);
addToDone("Exercise 43 is correct.")


// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.

assert(hasVowels("banana"), true);
assert(hasVowels("ubuntu"), true);
assert(hasVowels("QQQQ"), false);
assert(hasVowels("wyrd"), false);
addToDone("Exercise 44 is correct.")


// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.

assert(countVowels("banana"), 3)
assert(countVowels("ubuntu"), 3)
assert(countVowels("mango"), 2)
assert(countVowels("QQQQ"), 0)
assert(countVowels("wyrd"), 0)
addToDone("Exercise 45 is correct.")


// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels

assert(removeVowels("banana"), "bnn");
assert(removeVowels("ubuntu"), "bnt");
assert(removeVowels("mango"), "mng");
assert(removeVowels("QQQQ"), "QQQQ");
addToDone("Exercise 46 is correct.")


// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel

assert(startsWithVowel("ubuntu"), true);
assert(startsWithVowel("banana"), false);
assert(startsWithVowel("mango"), false);
addToDone("Exercise 47 is correct.")


// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel


assert(endsWithVowel("ubuntu") == true);
assert(endsWithVowel("banana") == true);
assert(endsWithVowel("mango") == true);
assert(endsWithVowel("spinach") == false);
addToDone("Exercise 48 is correct.")


// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel

assert(startsAndEndsWithVowel("ubuntu") == true);
assert(startsAndEndsWithVowel("banana") == false);
assert(startsAndEndsWithVowel("mango") == false);
addToDone("Exercise 49 is correct.")


// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.

assert(first("ubuntu"), "u");
assert(first([1, 2, 3]), 1);
assert(first(["python", "is", "awesome"]), "python");
addToDone("Exercise 50 is correct.")




// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.

assert(second("ubuntu"), "b");
assert(second([1, 2, 3]), 2);
assert(second(["python", "is", "awesome"]), "is");
addToDone("Exercise 51 is correct.")


// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.

assert(third("ubuntu"), "u");
assert(third([1, 2, 3]), 3);
assert(third(["python", "is", "awesome"]), "awesome");
addToDone("Exercise 52 is correct.")


// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.

assert(forth("ubuntu"), "n");
assert(forth([1, 2, 3, 4]), 4);
assert(forth(["python", "is", "awesome", "right?"]), "right?");
addToDone("Exercise 53 is correct.")


// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.

assert(last("ubuntu"), "u");
assert(last([1, 2, 3, 4]), 4);
assert(last(["python", "is", "awesome"]), "awesome");
assert(last(["kiwi", "mango", "guava"]), "guava");
addToDone("Exercise 54 is correct.")


// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.

assert(secondToLast("ubuntu"), "t");
assert(secondToLast([1, 2, 3, 4]), 3);
assert(secondToLast(["python", "is", "awesome"]), "is");
assert(secondToLast(["kiwi", "mango", "guava"]), "mango");
addToDone("Exercise 55 is correct.")


// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.

assert(thirdToLast("ubuntu"), "n");
assert(thirdToLast([1, 2, 3, 4]), 2);
assert(thirdToLast(["python", "is", "awesome"]), "python");
assert(thirdToLast(["strawberry", "kiwi", "mango", "guava"]), "kiwi");
addToDone("Exercise 56 is correct.")


// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array

assert(firstAndSecond([1, 2, 3, 4]), [1, 2]);
assert(firstAndSecond(["python", "is", "awesome"]), ["python", "is"]);
assert(firstAndSecond(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "kiwi"]);
addToDone("Exercise 57 is correct.")


// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array

assert(firstAndLast([1, 2, 3, 4]), [1, 4]);
assert(firstAndLast(["python", "is", "awesome"]), ["python", "awesome"]);
assert(firstAndLast(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "guava"]);
addToDone("Exercise 58 is correct.")



// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.

assert(firstToLast([1, 2, 3, 4]), [2, 3, 4, 1]);
assert(firstToLast(["python", "is", "awesome"]), ["is", "awesome", "python"]);
assert(firstToLast(["strawberry", "kiwi", "mango", "guava"]), ["kiwi", "mango", "guava", "strawberry"]);
addToDone("Exercise 59 is correct.")



// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.

assert(sumAll([1, 2, 3, 4]), 10);
assert(sumAll([3, 3, 3]), 9);
assert(sumAll([0, 5, 6]), 11);
addToDone("Exercise 60 is correct.")



//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value

assert(mean([1, 2, 3, 4]), 2.5);
assert(mean([3, 3, 3]), 3);
assert(mean([1, 5, 6]), 4);
addToDone("Exercise 61 is correct.")



// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value

assert(median([1, 2, 3, 4, 5]), 3.0);
assert(median([1, 2, 3]), 2.0);
assert(median([1, 5, 6]), 5.0);
assert(median([1, 2, 5, 6]), 3.5);
addToDone("Exercise 62 is correct.")


// Exercise 63
// Write a function definition named mode that takes in sequence of numbers and returns the most commonly occuring value

assert(mode([1, 2, 2, 3, 4]), 2);
assert(mode([1, 1, 2, 3]), 1);
assert(mode([2, 2, 3, 3, 3]), 3);
addToDone("Exercise 63 is correct.")


// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together

assert(productOfAll([1, 2, 3]), 6);
assert(productOfAll([3, 4, 5]), 60);
assert(productOfAll([2, 2, 3, 0]), 0);
addToDone("Exercise 64 is correct.")


// Keep this variable assignment for the next few problems
numbers = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5] 


// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.

assert(getHighestNumber([1, 2, 3]), 3);
assert(getHighestNumber([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), 5);
assert(getHighestNumber([-5, -3, 1]), 1);
addToDone("Exercise 65 is correct.")




// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.

assert(getSmallestNumber([1, 2, 3]), 1);
assert(getSmallestNumber([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), -5);
assert(getSmallestNumber([-4, -3, 1]), -4);
addToDone("Exercise 66 is correct.")


// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.

assert(onlyOddNumbers([1, 2, 3]), [1, 3]);
assert(onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -3, -1, 1, 3, 5]);
assert(onlyOddNumbers([-4, -3, 1]), [-3, 1]);
addToDone("Exercise 67 is correct.")



// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.

assert(onlyEvenNumbers([1, 2, 3]), [2]);
assert(onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-4, -2, 2, 4]);
assert(onlyEvenNumbers([-4, -3, 1]), [-4]);
addToDone("Exercise 68 is correct.")


// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.

assert(onlyPositiveNumbers([1, 2, 3]), [1, 2, 3]);
assert(onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assert(onlyPositiveNumbers([-4, -3, 1]), [1]);
addToDone("Exercise 69 is correct.")


// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.

assert(onlyNegativeNumbers([1, 2, 3]), []);
assert(onlyNegativeNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -4, -3, -2, -1]);
assert(onlyNegativeNumbers([-4, -3, 1]), [-4, -3]);
addToDone("Exercise 70 is correct.");



// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence

assert(hasEvens([1, 2, 3]), true);
assert(hasEvens([2, 5, 6]), true);
assert(hasEvens([3, 3, 3]), false);
assert(hasEvens([]), false);
addToDone("Exercise 71 is correct.");



// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers

assert(countEvens([1, 2, 3]), 1);
assert(countEvens([2, 5, 6]), 2);
assert(countEvens([3, 3, 3]), 0);
assert(countEvens([5, 6, 7, 8] ), 2);
addToDone("Exercise 72 is correct.")


// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence

assert(hasOdds([1, 2, 3]), true);
assert(hasOdds([2, 5, 6]), true);
assert(hasOdds([3, 3, 3]), true);
assert(hasOdds([2, 4, 6]), false);
addToDone("Exercise 73 is correct.")


// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence

assert(countOdds([1, 2, 3]), 2);
assert(countOdds([2, 5, 6]), 1);
assert(countOdds([3, 3, 3]), 3);
assert(countOdds([2, 4, 6]), 0);
addToDone("Exercise 74 is correct.")


// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers

assert(countNegatives([1, -2, 3]), 1);
assert(countNegatives([2, -5, -6]), 2);
assert(countNegatives([3, 3, 3]), 0);
addToDone("Exercise 75 is correct.")


// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers

assert(countPositives([1, -2, 3]), 2);
assert(countPositives([2, -5, -6]), 1);
assert(countPositives([3, 3, 3]), 3);
assert(countPositives([-2, -1, -5]), 0);
addToDone("Exercise 76 is correct.")


// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence

assert(onlyPositiveEvens([1, -2, 3]), []);
assert(onlyPositiveEvens([2, -5, -6]), [2]);
assert(onlyPositiveEvens([3, 3, 4, 6]), [4, 6]);
assert(onlyPositiveEvens([2, 3, 4, -1, -5]), [2, 4]);
addToDone("Exercise 77 is correct.")


// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence

assert(onlyPositiveOdds([1, -2, 3]), [1, 3]);
assert(onlyPositiveOdds([2, -5, -6]), []);
assert(onlyPositiveOdds([3, 3, 4, 6]), [3, 3]);
assert(onlyPositiveOdds([2, 3, 4, -1, -5]), [3]);
addToDone("Exercise 78 is correct.")


// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence

assert(onlyNegativeEvens([1, -2, 3]), [-2]);
assert(onlyNegativeEvens([2, -5, -6]), [-6]);
assert(onlyNegativeEvens([3, 3, 4, 6]), []);
assert(onlyNegativeEvens([-2, 3, 4, -1, -4]), [-2, -4]);
addToDone("Exercise 79 is correct.")


// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence

assert(onlyNegativeOdds([1, -2, 3]), []);
assert(onlyNegativeOdds([2, -5, -6]), [-5]);
assert(onlyNegativeOdds([3, 3, 4, 6]), []);
assert(onlyNegativeOdds([2, -3, 4, -1, -4]), [-3, -1]);
addToDone("Exercise 80 is correct.")


// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.

assert(shortestString(["kiwi", "mango", "strawberry"]), "kiwi");
assert(shortestString(["hello", "everybody"]), "hello");
assert(shortestString(["mary", "had", "a", "little", "lamb"]), "a");
addToDone("Exercise 81 is correct.")


// Exercise 82
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.

assert(longestString(["kiwi", "mango", "strawberry"]), "strawberry");
assert(longestString(["hello", "everybody"]), "everybody");
assert(longestString(["mary", "had", "a", "little", "lamb"]), "little");
addToDone("Exercise 82 is correct.")

// *hint* for the next few exercises, consider using sets - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// If you've got a set and need to convert it back into an array, do a search for "convert a set into an array in JavaScript"

// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns a set with only the unique values from that array.

assert(getUniqueValues(["ant", "ant", "mosquito", "mosquito", "ladybug"]), ["ant", "mosquito", "ladybug"]);
assert(getUniqueValues(["b", "a", "n", "a", "n", "a", "s"]), ["b", "a", "n", "s"]);
assert(getUniqueValues(["mary", "had", "a", "little", "lamb", "little", "lamb", "little", "lamb"]), ["mary", "had", "a", "little", "lamb"]);
addToDone("Exercise 83 is correct.")


// Exercise 84
// Write a function definition named getUniqueValuesFromTwoArrays that takes two arrays and returns a single array with only the unique values


assert(getUniqueValuesFromTwoArrays([5, 1, 2, 3], [3, 4, 5, 5]), [1, 2, 3, 4, 5]);
assert(getUniqueValuesFromTwoArrays([1, 1], [2, 2, 3]), [1, 2, 3]);
assert(getUniqueValuesFromTwoArrays(["tomato", "mango", "kiwi"], ["eggplant", "tomato", "broccoli"]), ["tomato", "mango", "kiwi", "eggplant", "broccoli"]);
addToDone("Exercise 84 is correct.")


// Exercise 85
// Write a function definition named getValuesInCommon that takes two arrays and returns a single array with the values that each array has in common


assert(getValuesInCommon([5, 1, 2, 3], [3, 4, 5, 5]), [3, 5]);
assert(getValuesInCommon([1, 2], [2, 2, 3]), [2]);
assert(getValuesInCommon(["tomato", "mango", "kiwi"], ["eggplant", "tomato", "broccoli"]), ["tomato"]);
addToDone("Exercise 85 is correct.")



// Exercise 86
// Write a function definition named get_values_not_in_common that takes two arrays and returns a single array with the values that each array does not have in common

assert(get_values_not_in_common([5, 1, 2, 3], [3, 4, 5, 5]), [1, 2, 4]);
assert(get_values_not_in_common([1, 1], [2, 2, 3]), [1, 2, 3]);
assert(get_values_not_in_common(["tomato", "mango", "kiwi"], ["eggplant", "tomato", "broccoli"]), ["mango", "kiwi", "eggplant", "broccoli"]);
addToDone("Exercise 86 is correct.")


// Working with JS Objects

// The following objects 
const tukey_paper = {
    "title": "The Future of Data Analysis",
    "author": "John W. Tukey",
    "link": "https://projecteuclid.org/euclid.aoms/1177704711",
    "year_published": 1962
}

const thomas_paper = {
    "title": "A mathematical model of glutathione metabolism",
    "author": "Rachel Thomas",
    "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    "year_published": 2008
}


// Exercise 87
// Write a function named getPaperTitle that takes in a object and returns the title property

assert(getPaperTitle(tukey_paper), "The Future of Data Analysis");
assert(getPaperTitle(thomas_paper), "A mathematical model of glutathione metabolism");
addToDone("Exercise 87 is correct.")

// this code defines a JS object with information about a book.
const book = {
    "title": "Genetic Algorithms and Machine Learning for Programmers",
    "price": 36.99,
    "author": "Frances Buontempo"
}

// Exercise 89
// Write a function named getPrice that takes in a object and returns the price

assert(getPrice(book), 36.99);
addToDone("Exercise 89 is complete.")



// Exercise 90
// Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author's name


assert(getBookAuthor(book), "Frances Buontempo");
addToDone("Exercise 90 is complete.")


// The next exercises work with a arrays of objects.
// You'll see arrays of objects over and over again with data in a program. 
// Here is our arrays of objects.
const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
]


// Exercise 91
// Write a function named get_numberOfBooks that takes in a array of objects and returns the number of objects in that array.

assert(get_numberOfBooks(books), 4);
addToDone("Exercise 91 is complete.")



// Exercise 92
// Write a function named totalOfBookPrices that takes in a array of objects and returns the sum total of all the book prices added together

assert(totalOfBookPrices(books), 122.9)
addToDone("Exercise 92 is complete.")


// Exercise 93
// Write a function named getAverageBookPrice that takes in a array of objects and returns the average book price.

assert(getAverageBookPrice(books), 30.725);
addToDone("Exercise 93 is complete.")


// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object's price in the array

assert(highestPriceBook(books), {
    "title": "The Visual Display of Quantitative Information",
    "price": 38.00,
    "author": "Edward Tufte"
});

addToDone("Exercise 94 is complete")



// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array


assert(lowestPriceBook(books), {
    "title": "Weapons of Math Destruction",
    "author": "Cathy O'Neil",
    "price": 17.44
});
addToDone("Exercise 95 is complete.")


const shopping_cart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
}


// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shopping_cart object.

assert(getTaxRate(shopping_cart), .08);
addToDone("Exercise 96 is complete")



// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart. 
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.

assert(numberOfItemTypes(shopping_cart), 5);
addToDone("Exercise 97 is complete.")



// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type

assert(totalNumberOfItems(shopping_cart), 17);
addToDone("Exercise 98 is complete.")



// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.\

assert(getAverageItemPrice(shopping_cart), 2.1420000000000003);
addToDone("Exercise 99 is complete.")



// Exercise 100
// Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's price.
// Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity

assert(getAverageSpentPerItem(shopping_cart), 1.333529411764706);
addToDone("Exercise 100 is complete.")


// Exercise 101
// Write a function named most_spent_on_item that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible. 
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"

assert(most_spent_on_item(shopping_cart), {
    "title": "chocolate",
    "price": 0.75,
    "quantity": 9
});
addToDone("Exercise 101 is complete.")
