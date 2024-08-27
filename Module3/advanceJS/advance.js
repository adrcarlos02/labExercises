/*
1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.

(Lab notes- a counter function is a piece of code that counts numbers- it;'s like a clicker that counts how many times you press the button)

a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.
*/

function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

//a
let counter2 = makeCounter(); //counter1 and counter2 don’t interfere with each other. They each keep track of their own count.
counter2(); // 1 (This is independent from counter1)
counter2(); // 2

//b
let counter3 = makeCounter(10); // Starts from 10, increments by 1
counter3(); // 11
counter3(); // 12

//c
let counter4 = makeCounter(5, 3); // Starts from 5, increments by 3 - provides flexibility on how to control where the counter starts and how many calls can be made
counter4(); // 8
counter4(); // 11

/*
2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all.
 */

function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

/*a
Here’s the order in which the messages will print:

	1.	#4: Not delayed at all will print first because it’s called directly without any delay.
	2.	#3: Delayed by 0ms will print next because it has a 0ms delay, meaning it will be put into the queue and processed as soon as the current execution stack is done.
	3.	#2: Delayed by 20ms will print after a slight delay of 20ms.
	4.	#1: Delayed by 100ms will print last because it has the longest delay of 100ms.

JS is single threaded meaning it will process one process at a time

*/
//b

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

//c
let timeoutId = setTimeout(delayMsg, 10000, "#5: Delayed by 10,000ms"); // New test with a large delay

//d clear timeout can be used to cancel a scheduled setTimeout before it executes

clearTimeout(timeoutId);

/*
3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
similar requests until there's a brief pause, then only executing the most recent of those
requests. See https://www.techtarget.com/whatis/definition/debouncing\


(Debouncing is like saying, “Wait a second before doing anything.” If you keep clicking quickly, it won’t do anything right away. But if you stop clicking and wait for a moment (say 1 second), then it will only do the last thing you asked for.)


It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:

a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored.

b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms

c) Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement.

*/

//a
let debounce = (func) => {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, 1000); // sets a new timeout for 1 second
  };
};

function printMe() {
  console.log("printing debounced message");
}
printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

//b
let debounce1 = (func, ms) => {
  let timeout;

  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(func, ms);
  };
};

printMe = debounce1(printMe, 2000);
setTimeout(printMe, 100); // Call 1 (gets cancelled by the next call)
setTimeout(printMe, 200); // Call 2 (gets cancelled by the next call)
setTimeout(printMe, 300); // Call 3 (this one executes after 2000ms)

//c
function debounce(func, ms) {
  let timeout;

  return function (...args) {
    //collect all arguments passed to the debounced function
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), ms); // Pass the arguments to func
  };
}

// Example usage:
function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe("First message"), 100);
setTimeout(() => printMe("Second message"), 200);
setTimeout(() => printMe("Third message"), 300);

/*
Lab notes -  

	•	a) Basic Debounce: created a function that waits for 1 second of inactivity before calling the original function.
	•	b) Custom Delay: made the debounce function flexible by allowing  to specify the delay.
	•	c) Passing Arguments:  enhanced the debounce function so that it can pass arguments to the debounced function, which get used when the function is eventually called.
*/

/*
4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.

b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing

c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.
*/

//a

let printFibonacci = () => {
  let a = 1,
    b = 1;
  console.log(a);
  console.log(b);

  let interval = setInterval(() => {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }, 1000);
};

printFibonacci();

//b

function printFibonacciTimeouts() {
  let a = 1,
    b = 1;
  console.log(a);
  console.log(b);

  function printNext() {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
    setTimeout(printNext, 1000);
  }

  setTimeout(printNext, 1000);
}

printFibonacciTimeouts();

//c
function printFibonacciTimeouts(limit) {
  let a = 1,
    b = 1;
  console.log(a);
  if (limit > 1) console.log(b);

  let count = 2;

  function printNext() {
    if (count >= limit) return;
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
    count++;
    setTimeout(printNext, 1000);
  }
  setTimeout(printNext, 1000);
}

printFibonacciTimeouts(10);

/* 5. The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
setTimeout(car.description, 200); //fails
 */
/*a) Fix the setTimeout call by wrapping the call to car.description() inside a
function
b) Change the year for the car by creating a clone of the original and overriding it
c) Does the delayed description() call use the original values or the new values from
b)? Why?
d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function
e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d)*/

//a

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};


car.description();

setTimeout(function () {//wrap the call in an an anonymous function since earlier the method is no longer called in the context of the car object
  car.description();
}, 200);

//b
let car2 = { ...car, year: 2021 };
console.log(car2.year); // 2021

//c
/*The delayed description() call will use the original values of the car object, not the new values from car2. This happens because setTimeout was called with the original car.description method, which is bound to the original car object. Since setTimeout doesn’t know about car2, it still references the original object.*/

//d
setTimeout(car.description.bind(car), 200);


//e
let car3 = { ...car, model: "Cayman" };
console.log(car3.model); // "Cayman"


setTimeout(car.description.bind(car), 200);


/*
6. Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.

a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters*/

Function.prototype.delay = function(ms) {
  const func = this;
  return function(a, b) {
      setTimeout(() => {
          func(a, b);
      }, ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

// Test with two parameters
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds


//Part b) Using apply to Handle Any Number of Parameters
Function.prototype.delay = function(ms) {
  const func = this;
  return function(...args) {
      setTimeout(() => {
          func.apply(this, args);
      }, ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

// Test with two parameters
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds


//c) c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.
Function.prototype.delay = function(ms) {
  const func = this;
  return function(...args) {
      setTimeout(() => {
          func.apply(this, args);
      }, ms);
  };
};

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

// Test with four parameters
multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds

/*
7. In JavaScript, the toString method is used to convert an object to a string representation.
By default, when an object is converted to a String, it returns a string that looks something
like [object Object].
However, we can define our own toString methods for custom objects to provide a more
meaningful string representation.

a)  Define a custom toString method for the Person object that will format and print
their details
 */

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function() {
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
};

//b b) Test your method by creating 2 different people using the below constructor function and printing them
const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1.toString()); 

const person2 = new Person("Francis Sanchez", 19, "female");
console.log("person2: " + person2.toString());

//c c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender); // Inherit properties from Person
  this.cohort = cohort; // Add new property cohort
}

//d) Add a custom toString for Student objects that formats and prints their details. Test ith 2 students.

Student.prototype.toString = function() {
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
};

// Test with Student objects
const student1 = new Student("Alex", 40, "male", "Cyber Security Full Time");
console.log("Student 1: " + student1.toString());

const student2 = new Student("Lucy", 24, "female", "Software Eng. Part Time");
console.log("Student 2: " + student2.toString());



//8. The following DigitalClock class uses an interval to print the time every second once started, until stopped.

/*a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied.*/

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) { 
      super(prefix); 
      this.precision = precision; 
  }

  start() {
      this.display(); 
      this.timer = setInterval(() => this.display(), this.precision); 
  }
}

// Example usage:
const myPrecisionClock = new PrecisionClock('my precision clock:', 500); // Update every 500 ms
myPrecisionClock.start();


/*b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.*/

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") { // wakeupTime defaults to 07:00 if not provided
      super(prefix); // Call the constructor of the parent class (DigitalClock)
      this.wakeupTime = wakeupTime; // Set the wakeupTime value
  }

  start() {
      this.timer = setInterval(() => {
          let date = new Date();
          let [hours, mins] = [date.getHours(), date.getMinutes()];
          if (hours < 10) hours = '0' + hours;
          if (mins < 10) mins = '0' + mins;
          let currentTime = `${hours}:${mins}`;
          this.display(); // Display the current time
          if (currentTime === this.wakeupTime) {
              console.log("Wake Up!"); // Print the wake-up message
              this.stop(); // Stop the clock
          }
      }, 1000);
  }
}

// Example usage:
const myAlarmClock = new AlarmClock('my alarm clock:', "15:30"); // Alarm set for 3:30 PM
myAlarmClock.start();



/* 
9. We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.
a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below
b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value
*/


//a
function randomDelay() {
  // Generate a random delay between 1 and 20 seconds
  const delay = Math.floor(Math.random() * 20) + 1;

  // Return a promise that resolves after the delay
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(delay);
      }, delay * 1000); // Convert delay to milliseconds
  });
}

// Example usage:
randomDelay().then(() => console.log('There appears to have been a delay.'));

//b
function randomDelay() {
  const delay = Math.floor(Math.random() * 20) + 1; // Random delay between 1 and 20 seconds

  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (delay % 2 === 0) {
              resolve(delay); // Resolve if the delay is even
          } else {
              reject(delay); // Reject if the delay is odd
          }
      }, delay * 1000);
  });
}

// Example usage:
randomDelay()
  .then((delay) => console.log(`Resolved after ${delay} seconds.`))
  .catch((delay) => console.error(`Rejected after ${delay} seconds.`));

//c and d
randomDelay()
    .then((delay) => console.log(`Resolved after ${delay} seconds.`))
    .catch((delay) => console.error(`Rejected after ${delay} seconds.`));

/*10
10. Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in
the comments before the function.)

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}
});
return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));


*/

import fetch from 'node-fetch';
globalThis.fetch = fetch;

async function fetchURLData(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Fetch error: ${error.message}`);
    }
}

// Example usage with a valid URL
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

  //bb) Test both functions with valid and invalid URLs
  // Testing with a valid URL
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log('Valid URL:', data))
.catch(error => console.error('Valid URL Error:', error.message));

// Testing with an invalid URL
fetchURLData('https://jsonplaceholder.typicode.com/invalid-endpoint')
.then(data => console.log('Invalid URL:', data))
.catch(error => console.error('Invalid URL Error:', error.message));


//c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.

async function fetchMultipleURLData(urls) {
  try {
      const fetchPromises = urls.map(url => fetchURLData(url));
      const results = await Promise.all(fetchPromises);
      return results;
  } catch (error) {
      throw new Error(`Error fetching one or more URLs: ${error.message}`);
  }
}

// Example usage with an array of URLs
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/invalid-endpoint'
];

fetchMultipleURLData(urls)
  .then(results => console.log('Results:', results))
  .catch(error => console.error('Error:', error.message));