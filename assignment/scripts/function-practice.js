console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}

console.log("In Hello World:");

// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hi,', name;
}

// Remember to call the function to test
console.log('How I like to be greeted:', helloName('Majid!'));

// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber) {
  console.log("The sum of:", firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log("What is the the total of the two numbers:", addNumbers(2, 3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(thirdNumber, fourthNumber, fifthNumber) {
  console.log(
    "The mulptiplied interger is:",
    thirdNumber,
    fourthNumber,
    fifthNumber
  );
  let answer = thirdNumber * fourthNumber * fifthNumber;
  return answer;
}
console.log("This should give you", multiplyThree(2, 5, 6));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
let number = 1
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log(isPositive(10));
console.log("isPositive - should say false", isPositive(0));
console.log(isPositive(-1000));
console.log("isPositive - should say false", isPositive(-3));
console.log(isPositive(-10000000000));
// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
  function getLast( array ) {
    if ( array.length === 0){
      return undefined;
    }else{
      return array[array.length-1]
    }
  }
  let boats = ['blue', 'green', 'red', 'blue']
  let cars = [];
  console.log(getLast(boats));
  console.log(getLast(cars));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for(i=0; i < array.length; i++){
    if(array[i]===value ){
      return true;
    }
    else{
      return false;
  }
}
}
console.log('Do we have any blue boats?:', find('blue', boats));
console.log('Do we have any yellow boats?:',find('yellow',boats));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
