// If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable
// If youi get a "TypeError" of any kind, it means that there is a data type mismatch. Check the data types.

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJavaScriptRightNow and assign it the boolean true.
// The line below creates the variable named doingJavaScriptRightNow and assigns the boolean value true
// To complete Exercise #0, uncomment the following line of JS
// var doingJavaScriptRightNow = true

// The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
assert(doingJavaScriptRightNow, true, "a variable holding a true boolean value should be equal to true"); 
addToDoneList("Exercise 0 is correct");


//  Exercise 1
// On the line below, create a varia ble named onMarsRightNow and assign it the boolean value of false

assert(onMarsRightNow, false, "If you see a Reference Error, be sure to create the variable and assign it a value.");
addToDoneList("Exercise 1 is correct.");

// Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"]

assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry"], "ensure the array variable contains all the strings in the provided order");
addToDoneList("Exercise 2 is correct.");

//  Exercise 3
//  Create a variable named vegetables and assign it a list of fruits containing the following vegetable names as strings: 
//  eggplant, broccoli, carrot, cauliflower, and zucchini

assert(vegetables, ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"], "Ensure the variable contains all the strings in the provided order");
addToDoneList("Exercise 3 is correct.");


// Exercise 4
// Create a variable named numbers and assign it a list of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Ensure the variable contains the numbers 1-10 in order.");
addToDoneList("Exercise 4 is correct.");


// Exercise 5
// Add the string "tomato" to the end of the fruits array. 
// *Hint* Recommend finding and using a built-in JS operation to add to a list rather than recreating the array.

asset(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Ensure the variable contains all the strings in the right order");
addToDoneList("Exercise 5 is correct");

// Exercise 6
// Given the following assignment of the vegetables array, add "tomato" to the end of the list. 
// Recommend using the built-in JS operation to add to a list.


assert(vegetables,["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Ensure the variable contains all the strings in the provided order");
addToDoneList("Exercise 6 is correct")


// Exercise 7
// Given the list of numbers defined below, reverse the list of numbers that you created above. 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


assert(numbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "An Error means that the answer is incorrect.")
addToDoneList("Exercise 7 is correct")



// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method

assert(vegetables, ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'])
addToDoneList("Exercise 8 is correct.")



// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order

assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'])
addToDoneList("Exercise 9 is correct.")


// Exercise 10
// Write the code necessary to produce a single list that holds all fruits then all vegetables in the order as they were sorted above.

assert(fruits_and_veggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'])
addToDoneList("Exercise 10 is correct")

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
addToDoneList("Exercise 11 is correct.")


// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.



assert(isPositive(positiveOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isPositive(positiveEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isPositive(negativeOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isPositive(negativeEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
addToDoneList("Exercise 12 is correct.")


// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.



assert(isNegative(positiveOddNumber, false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isNegative(positiveEvenNumber, false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isNegative(negativeOddNumber, true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isNegative(negativeEvenNumber, true, "Ensure that the function is defined, named properly, and returns the correct value");
addToDoneList("Exercise 13 is correct.")


// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.

assert(isOdd(positiveOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isOdd(positiveEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isOdd(negativeOddNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isOdd(negativeEvenNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
addToDoneList("Exercise 14 is correct.")

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.

assert(isEven(2), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(positiveOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(positiveEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(negativeOddNumber), false, "Ensure that the function is defined, named properly, and returns the correct value");
assert(isEven(negativeEvenNumber), true, "Ensure that the function is defined, named properly, and returns the correct value");
addToDoneList("Exercise 15 is correct.")


// Exercise 16
// Write a function definition named identity that takes in any argument and returns that argument's value. Don't overthink this one!

assert(identity(fruits), fruits, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(vegetables), vegetables, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(positiveOddNumber), positiveOddNumber, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(positiveEvenNumber), positiveEvenNumber, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(negativeOddNumber), negativeOddNumber, "Ensure that the function is defined, named properly, and returns the correct value");
assert(identity(negativeEvenNumber), negativeEvenNumber, "Ensure that the function is defined, named properly, and returns the correct value");
addToDoneList("Exercise 16 is correct.")


// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd



assert(isPositiveOdd(3), true, "Double check your syntax and logic" );
assert(isPositiveOdd(positiveOddNumber), true, "Double check your syntax and logic");
assert(isPositiveOdd(positiveEvenNumber), false, "Double check your syntax and logic");
assert(isPositiveOdd(negativeOddNumber), false, "Double check your syntax and logic");
assert(isPositiveOdd(negativeEvenNumber), false, "Double check your syntax and logic");
addToDoneList("Exercise 17 is correct.")


// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even

assert(isPositiveEven(4), true, "Double check your syntax and logic" );
assert(isPositiveEven(positiveOddNumber), false, "Double check your syntax and logic");
assert(isPositiveEven(positiveEvenNumber), true, "Double check your syntax and logic");
assert(isPositiveEven(negativeOddNumber), false, "Double check your syntax and logic");
assert(isPositiveEven(negativeEvenNumber), false, "Double check your syntax and logic");
addToDoneList("Exercise 18 is correct.")


// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.

assert(isNegativeOdd(-3), true, "Double check your syntax and logic" );
assert(isNegativeOdd(positiveOddNumber), false, "Double check your syntax and logic");
assert(isNegativeOdd(positiveEvenNumber), false, "Double check your syntax and logic");
assert(isNegativeOdd(negativeOddNumber), true, "Double check your syntax and logic");
assert(isNegativeOdd(negativeEvenNumber), false, "Double check your syntax and logic");
addToDoneList("Exercise 19 is correct.")


// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.

assert(isNegativeEven(-4), true, "Double check your syntax and logic" );
assert(isNegativeEven(positiveOddNumber), false, "Double check your syntax and logic");
assert(isNegativeEven(positiveEvenNumber), false, "Double check your syntax and logic");
assert(isNegativeEven(negativeOddNumber), false, "Double check your syntax and logic");
assert(isNegativeEven(negativeEvenNumber), true, "Double check your syntax and logic");
addToDoneList("Exercise 20 is correct.")



// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.

assert(half(4), 2);
assert(half(5), 2.5);
assert(half(positiveOddNumber), positiveOddNumber / 2);
assert(half(positiveEvenNumber), positiveEvenNumber / 2);
assert(half(negativeOddNumber), negativeOddNumber / 2);
assert(half(negativeEvenNumber), negativeEvenNumber / 2);
addToDoneList("Exercise 21 is correct.")



// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.

assert(double(4), 8)
assert(double(5), 10)
assert(double(positiveOddNumber), positiveOddNumber * 2)
assert(double(positiveEvenNumber), positiveEvenNumber * 2)
assert(double(negativeOddNumber), negativeOddNumber * 2)
assert(double(negativeEvenNumber), negativeEvenNumber * 2)
addToDoneList("Exercise 22 is correct.")



// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.

assert(triple(4), 12);
assert(triple(5), 15);
assert(triple(positiveOddNumber), positiveOddNumber * 3);
assert(triple(positiveEvenNumber), positiveEvenNumber * 3);
assert(triple(negativeOddNumber), negativeOddNumber * 3);
assert(triple(negativeEvenNumber), negativeEvenNumber * 3);
addToDoneList("Exercise 23 is correct.")



// Exercise 24
// Write a function definition named reverse_sign that takes in a number and returns the provided number but with the sign reversed.

assert(reverse_sign(4), -4);
assert(reverse_sign(-5), 5);
assert(reverse_sign(positiveOddNumber), positiveOddNumber * -1);
assert(reverse_sign(positiveEvenNumber), positiveEvenNumber * -1);
assert(reverse_sign(negativeOddNumber), negativeOddNumber * -1);
assert(reverse_sign(negativeEvenNumber), negativeEvenNumber * -1);
addToDoneList("Exercise 24 is correct.")



// Exercise 25
// Write a function definition named absolute_value that takes in a number and returns the absolute value of the provided number

assert(absolute_value(4), 4);
assert(absolute_value(-5), 5);
assert(absolute_value(positiveOddNumber), positiveOddNumber);
assert(absolute_value(positiveEvenNumber), positiveEvenNumber);
assert(absolute_value(negativeOddNumber), negativeOddNumber * -1);
assert(absolute_value(negativeEvenNumber), negativeEvenNumber * -1);
addToDoneList("Exercise 25 is correct.")



// Exercise 26
// Write a function definition named is_multiple_of_three that takes in a number and returns true or false if the number is evenly divisible by 3.

assert(is_multiple_of_three(3), true);
assert(is_multiple_of_three(15), true);
assert(is_multiple_of_three(9), true);
assert(is_multiple_of_three(4), false);
assert(is_multiple_of_three(10), false);
addToDoneList("Exercise 26 is correct.")




// Exercise 27
// Write a function definition named is_multiple_of_five that takes in a number and returns true or false if the number is evenly divisible by 5.

assert(is_multiple_of_five(3), false);
assert(is_multiple_of_five(15), true);
assert(is_multiple_of_five(9), false);
assert(is_multiple_of_five(4), false);
assert(is_multiple_of_five(10), true);
addToDoneList("Exercise 27 is correct.")



// Exercise 28
// Write a function definition named is_multiple_of_both_three_and_five that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.

assert(is_multiple_of_both_three_and_five(15), true);
assert(is_multiple_of_both_three_and_five(45), true);
assert(is_multiple_of_both_three_and_five(3), false);
assert(is_multiple_of_both_three_and_five(9), false);
assert(is_multiple_of_both_three_and_five(4), false);
addToDoneList("Exercise 28 is correct.")




// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.

assert(square(3), 9);
assert(square(2), 4);
assert(square(9), 81);
assert(square(positiveOddNumber), positiveOddNumber * positiveOddNumber);
addToDoneList("Exercise 29 is correct.")



// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.


assert(add(3, 2), 5);
assert(add(10, -2), 8);
assert(add(5, 7), 12);
addToDoneList("Exercise 30 is correct.")



// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.

assert(cube(3), 27);
assert(cube(2), 8);
assert(cube(5), 125);
assert(cube(positiveOddNumber), positiveOddNumber * positiveOddNumber * positiveOddNumber);
addToDoneList("Exercise 31 is correct.")



// Exercise 32
// Write a function definition named square_root that takes in a number and returns the square root of the provided number


assert(square_root(4), 2.0);
assert(square_root(64), 8.0);
assert(square_root(81), 9.0);
addToDoneList("Exercise 32 is correct.")




// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.


assert(subtract(8, 6), 2);
assert(subtract(27, 4), 23);
assert(subtract(12, 2), 10);
addToDoneList("Exercise 33 is correct.")



// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.

assert(multiply(2, 1), 2);
assert(multiply(3, 5), 15);
assert(multiply(5, 2), 10);
addToDoneList("Exercise 34 is correct.")



// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.


assert(divide(27, 9), 3);
assert(divide(15, 3), 5);
assert(divide(5, 2), 2.5);
assert(divide(10, 2), 5);
addToDoneList("Exercise 35 is correct.")


// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns only the quotient first argument quotient by the second argument.

assert(quotient(27, 9), 3)
assert(quotient(5, 2), 2)
assert(quotient(10, 3), 3)
addToDoneList("Exercise 36 is correct.")


// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

assert(remainder(3, 3), 0);
assert(remainder(5, 2), 1);
assert(remainder(7, 5), 2);
addToDoneList("Exercise 37 is correct.")



// Exercise 38
// Write a function definition named sum_of_squares that takes in two numbers, squares each number, then returns the sum of both squares.

assert(sum_of_squares(3, 2), 13);
assert(sum_of_squares(5, 2), 29);
assert(sum_of_squares(2, 4), 20);
addToDoneList("Exercise 38 is correct.")



// Exercise 39
// Write a function definition named times_two_plus_three that takes in a number, multiplies it by two, adds 3 and returns the result.

assert(times_two_plus_three(0), 3);
assert(times_two_plus_three(1), 5);
assert(times_two_plus_three(2), 7);
assert(times_two_plus_three(3), 9);
assert(times_two_plus_three(5), 13);
addToDoneList("Exercise 39 is correct.")


// Exercise 40
// Write a function definition named area_of_rectangle that takes in two numbers and returns the product.

assert(area_of_rectangle(1, 3), 3);
assert(area_of_rectangle(5, 2), 10);
assert(area_of_rectangle(2, 7), 14);
assert(area_of_rectangle(5.3, 10.3), 54.59);
addToDoneList("Exercise 40 is correct.")



// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle


assert(areaOfCircle(3), 28.274333882308138);
assert(areaOfCircle(5), 78.53981633974483);
assert(areaOfCircle(7), 153.93804002589985);
addToDoneList("Exercise 41 is correct.")


// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.

assert(circumference(3), 18.84955592153876);
assert(circumference(5), 31.41592653589793);
assert(circumference(7), 43.982297150257104);
addToDoneList("Exercise 42 is correct.")



// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.

assert(isVowel("a"), true);
assert(isVowel("U"), true);
assert(isVowel("banana"), false);
assert(isVowel("Q"), false);
assert(isVowel("y"), false);
addToDoneList("Exercise 43 is correct.")


// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.

assert hasVowels("banana") == true
assert hasVowels("ubuntu") == true
assert hasVowels("QQQQ") == false
assert hasVowels("wyrd") == false
addToDoneList("Exercise 44 is correct.")


// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.

assert(countVowels("banana"), 3)
assert(countVowels("ubuntu"), 3)
assert(countVowels("mango"), 2)
assert(countVowels("QQQQ"), 0)
assert(countVowels("wyrd"), 0)
addToDoneList("Exercise 45 is correct.")


// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels

assert(removeVowels("banana"), "bnn");
assert(removeVowels("ubuntu"), "bnt");
assert(removeVowels("mango"), "mng");
assert(removeVowels("QQQQ"), "QQQQ");
addToDoneList("Exercise 46 is correct.")


// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel

assert(startsWithVowel("ubuntu"), true);
assert(startsWithVowel("banana"), false);
assert(startsWithVowel("mango"), false);
addToDoneList("Exercise 47 is correct.")


// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel


assert(endsWithVowel("ubuntu") == true);
assert(endsWithVowel("banana") == true);
assert(endsWithVowel("mango") == true);
assert(endsWithVowel("spinach") == false);
addToDoneList("Exercise 48 is correct.")


// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel

assert(startsAndEndsWithVowel("ubuntu") == true);
assert(startsAndEndsWithVowel("banana") == false);
assert(startsAndEndsWithVowel("mango") == false);
addToDoneList("Exercise 49 is correct.")


// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.

assert(first("ubuntu"), "u");
assert(first([1, 2, 3]), 1);
assert(first(["python", "is", "awesome"]), "python");
addToDoneList("Exercise 50 is correct.")




// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.

assert(second("ubuntu"), "b");
assert(second([1, 2, 3]), 2);
assert(second(["python", "is", "awesome"]), "is");
print("Exercise 51 is correct.")


// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.

assert(third("ubuntu"), "u");
assert(third([1, 2, 3]), 3);
assert(third(["python", "is", "awesome"]), "awesome");
print("Exercise 52 is correct.")


// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.

assert(forth("ubuntu"), "n");
assert(forth([1, 2, 3, 4]), 4);
assert(forth(["python", "is", "awesome", "right?"]), "right?");
print("Exercise 53 is correct.")


// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.

assert(last("ubuntu"), "u");
assert(last([1, 2, 3, 4]), 4);
assert(last(["python", "is", "awesome"]), "awesome");
assert(last(["kiwi", "mango", "guava"]), "guava");
print("Exercise 54 is correct.")


// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.

assert(secondToLast("ubuntu"), "t");
assert(secondToLast([1, 2, 3, 4]), 3);
assert(secondToLast(["python", "is", "awesome"]), "is");
assert(secondToLast(["kiwi", "mango", "guava"]), "mango");
print("Exercise 55 is correct.")


// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.

assert(thirdToLast("ubuntu"), "n");
assert(thirdToLast([1, 2, 3, 4]), 2);
assert(thirdToLast(["python", "is", "awesome"]), "python");
assert(thirdToLast(["strawberry", "kiwi", "mango", "guava"]), "kiwi");
print("Exercise 56 is correct.")


// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as a list

assert(firstAndSecond([1, 2, 3, 4]), [1, 2]);
assert(firstAndSecond(["python", "is", "awesome"]), ["python", "is"]);
assert(firstAndSecond(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "kiwi"]);
print("Exercise 57 is correct.")


// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as a list

assert(firstAndLast([1, 2, 3, 4]), [1, 4]);
assert(firstAndLast(["python", "is", "awesome"]), ["python", "awesome"]);
assert(firstAndLast(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "guava"]);
print("Exercise 58 is correct.")



// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.

assert(firstToLast([1, 2, 3, 4]), [2, 3, 4, 1]);
assert(firstToLast(["python", "is", "awesome"]), ["is", "awesome", "python"]);
assert(firstToLast(["strawberry", "kiwi", "mango", "guava"]), ["kiwi", "mango", "guava", "strawberry"]);
print("Exercise 59 is correct.")



// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.

assert(sumAll([1, 2, 3, 4]), 10);
assert(sumAll([3, 3, 3]), 9);
assert(sumAll([0, 5, 6]), 11);
print("Exercise 60 is correct.")



//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value

assert(mean([1, 2, 3, 4]), 2.5);
assert(mean([3, 3, 3]), 3);
assert(mean([1, 5, 6]), 4);
print("Exercise 61 is correct.")



// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value

assert(median([1, 2, 3, 4, 5]), 3.0);
assert(median([1, 2, 3]), 2.0);
assert(median([1, 5, 6]), 5.0);
assert(median([1, 2, 5, 6]), 3.5);
print("Exercise 62 is correct.")


// Exercise 63
// Write a function definition named mode that takes in sequence of numbers and returns the most commonly occuring value

assert(mode([1, 2, 2, 3, 4]), 2);
assert(mode([1, 1, 2, 3]), 1);
assert(mode([2, 2, 3, 3, 3]), 3);
print("Exercise 63 is correct.")


// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together

assert(productOfAll([1, 2, 3]), 6);
assert(productOfAll([3, 4, 5]), 60);
assert(productOfAll([2, 2, 3, 0]), 0);
print("Exercise 64 is correct.")


// Keep this variable assignment for the next few problems
numbers = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5] 


// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.

assert(getHighestNumber([1, 2, 3]), 3);
assert(getHighestNumber([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), 5);
assert(getHighestNumber([-5, -3, 1]), 1);
print("Exercise 65 is correct.")




// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.

assert(getSmallestNumber([1, 2, 3]), 1);
assert(getSmallestNumber([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), -5);
assert(getSmallestNumber([-4, -3, 1]), -4);
print("Exercise 66 is correct.")


// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in a list.

assert(onlyOddNumbers([1, 2, 3]), [1, 3]);
assert(onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -3, -1, 1, 3, 5]);
assert(onlyOddNumbers([-4, -3, 1]), [-3, 1]);
print("Exercise 67 is correct.")



// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in a list.

assert(onlyEvenNumbers([1, 2, 3]), [2]);
assert(onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-4, -2, 2, 4]);
assert(onlyEvenNumbers([-4, -3, 1]), [-4]);
print("Exercise 68 is correct.")


// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in a list.

assert(onlyPositiveNumbers([1, 2, 3]), [1, 2, 3]);
assert(onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assert(onlyPositiveNumbers([-4, -3, 1]), [1]);
print("Exercise 69 is correct.")


// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in a list.

assert(onlyNegativeNumbers([1, 2, 3]), []);
assert(onlyNegativeNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -4, -3, -2, -1]);
assert(onlyNegativeNumbers([-4, -3, 1]), [-4, -3]);
print("Exercise 70 is correct.")



