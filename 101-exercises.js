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
// Write a function definition named isNegative that takes in a number and returns True or False if that number is negative.



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
