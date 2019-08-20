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

// The following code sets up some random numbers.
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

positiveEvenNumber = randomPositiveEvenNumber()
positiveOddNumber = randomPositiveOddNumber();
negativeEvenNumber = randomNegativeEvenNumber();
negativeOddNumber = randomNegativeOddNumber();

console.log(positiveEvenNumber)
console.log(positiveOddNumber)
console.log(negativeEvenNumber)
console.log(negativeOddNumber)

// Writing functions
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions for help with writing functions
// Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.

