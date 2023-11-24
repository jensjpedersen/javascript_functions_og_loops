
const l = (str) => console.log(str); 

/* Exercise #1:
      Fix the formatText function below such that it fits the given specification:
       * returns given parameter (str) with leading and trailing spaces removed, and all letters converted to lowercase.
*/

console.log(formatText("      Lorem IPSUM.    ")); // expected output (without quotes): "lorem ipsum."

function formatText(str) {
    return str.trim().toLowerCase()
}

/* Exercise #2:
      Change the function in exercise #1 to be an arrow function.
      If you're getting errors: google javascript hoisting. You may need to move the console.log(formatText("      Lorem IPSUM.    ")) from line 7.
*/


let formatTextArrow = (str) => str.trim().toLowerCase()

console.log(formatTextArrow("      Lorem IPSUM.    "));

/* Exercise #3: The autoReply function below takes a function as parameter,
   call (run/execute) the autoReply function with console.log as the callback function.
   Doing so, you should see "This is an automated response." in the console.
*/

function autoReply(customFunction) {
    customFunction("This is an automated response")
}
autoReply(console.log);

/* Exercise #3b: Create a function that will display some provided text on the website.
                  For example, assuming you named your function: display
                  I should be able to call (run/execute) it with display("hello world!")
                  That should then display: hello world!
                  on the webpage.

                  And then call the autoReply function with your display function. Just
                  console.log the result.
*/

const display = (str) => {
    const h1 = document.createElement("h1");
    const textNode = document.createTextNode(str);
    h1.appendChild(textNode);
    console.log(document.body.appendChild(h1))
  
};

autoReply(display);

/* Exercise #4: Create a function that takes two arguments:
                 1. a callback function
                 2. a string

                 And then call (run/execute) your function
                 (this is similar to Exercise #3 but with a custom message instead of only "This is an automated response.")
*/

function customAutoReply(method, str) {
    const h1 = document.createElement("h1");
    const textNode = document.createTextNode(str);
    h1.appendChild(textNode);
    method(document.body.appendChild(h1))
}

customAutoReply(console.log, "This is also an automated response.");

/* Exercise #4b: In exercises 3 & 4 you've been providing named functions as callback functions,
  try to call (run/execute) both functions with anonymous functions instead.
  Use both the function() {} syntax, and then also arrow function.
*/

// TODO: 
autoReply(function (text) {
  // Your code here
});


/* Exercise #5: Create a function that takes the following parameters:
                 1. An array
                 2. A callback function

                 In your function write code that will loop through a given array,
                 and with each iteration, it will call your provided callback function.

                 Example behavior, lets say you named your function forEach, if we call it with:
                 for-loop(threeFruits, console.log) // would display:
                  apple
                  banana
                  mango
                 or if we call it with:
                 for-loop(fiveWords, console.log) // would display:
                  one
                  two
                  three
                  four
                  five

                (For this exercise please use traditional loops (not array methods), for-loop, while loop, or for-of loop)
*/



function checkArray(callback, arr) {
    for (let e of arr) {
        callback(e)
    }
}

const fiveWords = ["one", "two", "three", "four", "five"];
const threeFruits = ["apple", "banana", "mango"];

checkArray(console.log, fiveWords);
checkArray(console.log, threeFruits);


/* Exercise #6: Similar to task 5, but instead of first declaring a function and then writing a loop by hand:
                 Use an array method that loops through an array and provides a callback function that will either console log or display each array element
                 Resources: https://javascript.info/array-methods
                            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

                 Bonus task: see if you can get the array-method to also display the index of each element in addition to just the element, for example:
                             apple at index 0
                             banana at index 1
                             and so on...
*/

function loopThrough(arr) {
    arr.forEach(function (element, index) {console.log(element + ' at index ' + index)})
}

console.log('Exercise 6.')
loopThrough(fiveWords);
loopThrough(threeFruits);

/* Exercise #7: In Exercise #6 your task was to iterate through an array and just display the results, in this task try to use an array method that will
                 Both iterate through an array and also return a new array with each number changed in value, for example:
                 the following (replace someArrayMethod with an actual array method, and yourCallBackFunctionLogic with some code)
                 here it should multiply each element by 3 and then tripleNums should contain all the numbers multiplied by 3:

                 let tripleNums = nums.someArrayMethod(...yourCallBackFunctionLogic...)
                 console.log(tripleNums) // [3,6,9,12,15]
*/


const nums = [1, 2, 3, 4, 5];
const nums2 = [4321, 43, 2, 897698, 321, 87];

function tripleArrayValues(arr) {
    return arr.map(function (element) {return element*3})
}


console.log('Exercise 7.');
console.log(tripleArrayValues(nums));
console.log(tripleArrayValues(nums2));


/* Excercise #8: Use a different array method that will return a new array based on some filter,
                 For example lets say we just want odd numbers from the nums array:
                              let oddNumbers = nums.someArrayMethod(...yourCallBackFunctionLogic...)
                              console.log(oddNumbers) // should display: [1,3,5]


                  Resources: https://javascript.info/array-methods
                             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

function logEvenOfArray(arr) {
    return arr.filter((value) => value % 2 == 0)
}

console.log('Exercise 8');
console.log(logEvenOfArray(nums));
console.log(logEvenOfArray(nums2));
