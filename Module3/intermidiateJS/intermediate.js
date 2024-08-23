/*1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.*/

let capitaliseWords = function (str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
};

const mySentence = "monday is a drag.";
console.log(capitaliseWords(mySentence)); // Monday Is A Drag.

const mySentence1 = "i love dogs.";
console.log(capitaliseWords(mySentence1)); // I Love Dogs.

/* 2.Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (…) added to the end if it was too long, or the original text otherwise.

b) Write another variant of the truncate function that uses a conditional operator.

console.log(truncate('This text will be truncated if it is too long', 25))

// This text will be truncat... */

function truncate(str, max, ending = "...") {
  if (str.length > max) {
    return str.slice(0, max - ending.length) + ending;
  } else {
    return str;
  }
}

let longString = "Hamid is GOAT and is the direct descendant of the JS Gods";
let shortString = "Hamid is GOAT an";
console.log(truncate(longString, 16));
console.log(truncate(shortString, 16));

/* 3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case.*/

const animals = ["Tiger", "Giraffe"];
console.log(animals);

//a
animals.push("Elephant", "Lion");
console.log(animals); // Output: ['Tiger', 'Giraffe', 'Elephant', 'Lion']

//b.
animals.unshift("Monkey", "Zebra");
console.log(animals); // Output: ['Monkey', 'Zebra', 'Tiger', 'Giraffe', 'Elephant', 'Lion']

//c.
animals.sort();
console.log(animals); // Output: ['Elephant', 'Giraffe', 'Lion', 'Monkey', 'Tiger', 'Zebra']

//d.
function replaceMiddleAnimal(newValue) {
  const length = animals.length;
  let middleIndex = 0;

  /* other methods to be used 

-using a Math.ceil()  rounds a number up to the nearest integer. 

function replaceMiddleAnimal(newValue) {
    const length = animals.length;
    const middleIndex = Math.ceil(length / 2) - 1;

    if (length % 2 === 0) {
        animals.splice(middleIndex, 2, newValue); // For even-length arrays
    } else {
        animals.splice(middleIndex, 1, newValue); // For odd-length arrays
    }
}

- The bitwise right shift operator >> can be used to divide a number by 2 and floor it, similar to Math.floor().

function replaceMiddleAnimal(newValue) {
    const length = animals.length;
    const middleIndex = (length >> 1);

    if (length % 2 === 0) {
        animals.splice(middleIndex - 1, 2, newValue); // For even-length arrays
    } else {
        animals.splice(middleIndex, 1, newValue); // For odd-length arrays
    }
}

*/
  for (let i = 0; i < length; i++) {
    if (i === Math.floor(length / 2)) {
      middleIndex = i;
      break;
    }
  }

  if (animals.length % 2 === 0) {
    animals.splice(middleIndex - 1, 2, newValue); 
    animals.splice(middleIndex, 1, newValue);
  }
}

replaceMiddleAnimal("Crocodile");
console.log(animals); //Output: [ 'Elephant', 'Giraffe', 'Crocodile', 'Tiger', 'Zebra' ] removed the 2 middle strings (because the array number is an even number)

// e) 
function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => 
        animal.toLowerCase().startsWith(beginsWith.toLowerCase())
    );
}

console.log(findMatchingAnimals('z')); // Example output: ['Zebra']
console.log(findMatchingAnimals('g')); // Example output: ['Giraffe']

/*4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
a)The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.*/

//a
function camelCase(cssProp){
    let result = '';
    let capitaliseNext = false;

    for (let i = 0; i < cssProp.length; i++){
        if (cssProp[i]  === '-'){
            capitaliseNext  = true;
        } else {
            result += capitaliseNext ? cssProp[i].toUpperCase() : cssProp [i]; 
            capitaliseNext = false;
        }
    }
    
    return result; 
}

console.log(camelCase('margin-left')); // Output: 'marginLeft'
console.log(camelCase('background-color')); // Output: 'backgroundColor'


//b.  using forEach instead
console.log(camelCase('margin-left')); // Output: 'marginLeft'
console.log(camelCase('background-color')); // Output: 'backgroundColor'

function camelCase(cssProp) {
    let result = '';
    let capitalizeNext = false;

    cssProp.split('').forEach(char => {
        if (char === '-') {
            capitalizeNext = true;
        } else {
            result += capitalizeNext ? char.toUpperCase() : char;
            capitalizeNext = false;
        }
    });

    return result;
}

console.log(camelCase('margin-left')); // Output: 'marginLeft'
console.log(camelCase('background-color')); // Output: 'backgroundColor'

//c for .. of loop with conditional operator
function camelCase(cssProp) {
    let result = '';
    let capitalizeNext = false;

    for (const char of cssProp) {
        result += (char === '-') ? (capitalizeNext = true, '') : (capitalizeNext ? char.toUpperCase() : char);
        capitalizeNext = char === '-' ? true : false;
    }

    return result;
}


//5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004


//We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

/* a) Explain why the above code returns the wrong answer\

-toFixed() method converts a number to a string, rounding it to a specified number of decimal places. In this case, it converts twentyCents and tenCents to "0.20" and "0.10", respectively.

-then JavaScript concatenates the strings rather than adding them numerically. So, "0.20" + "0.10" results in "0.200.10" instead of 0.30.


b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.

c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns
the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below: */

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

//b

function currencyAddition(float1, float2) {
    const factor = 100; // Factor to convert to integer (assuming 2 decimal places)
    return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
}

console.log(currencyAddition(0.2, 0.1)); // Output: 0.3


// another method using parseFloat

function currencyAddition(float1, float2) {
    const factor = 100; // Factor to convert to integer (assuming 2 decimal places)
    
    // Convert to integer-like precision, then parse back to float
    const int1 = parseFloat((float1 * factor).toFixed(2));
    const int2 = parseFloat((float2 * factor).toFixed(2));
    
    // Add the integers and divide by the factor to get the final result
    const result = (int1 + int2) / factor;
    
    // Parse the final result to ensure it's a float with the correct precision
    return parseFloat(result.toFixed(2));
}


//c 
function currencyOperation(float1, float2, operation) {
    const factor = 100; // Factor to convert to integer (assuming 2 decimal places)
    const int1 = Math.round(float1 * factor);
    const int2 = Math.round(float2 * factor);
    let result;

    switch (operation) {
        case '+':
            result = int1 + int2;
            break;
        case '-':
            result = int1 - int2;
            break;
        case '*':
            result = (int1 * int2) / factor; // Multiplication requires an extra division by factor
            break;
        case '/':
            result = int1 / int2;
            break;
        default:
            throw new Error("Unsupported operation");
    }

    return result / factor;
}

console.log(currencyOperation(0.2, 0.1, '+')); // Output: 0.3
console.log(currencyOperation(0.3, 0.1, '-')); // Output: 0.2
console.log(currencyOperation(0.2, 0.1, '*')); // Output: 0.02
console.log(currencyOperation(0.3, 0.1, '/')); // Output: 3

//d
function currencyOperation(float1, float2, operation, numDecimals = 2) {
    const factor = Math.pow(10, numDecimals); // Factor based on numDecimals
    const int1 = Math.round(float1 * factor);
    const int2 = Math.round(float2 * factor);
    let result;

    switch (operation) {
        case '+':
            result = int1 + int2;
            break;
        case '-':
            result = int1 - int2;
            break;
        case '*':
            result = (int1 * int2) / factor;
            break;
        case '/':
            result = int1 / int2;
            break;
        default:
            throw new Error("Unsupported operation");
    }

    return result / factor;
}

console.log(currencyOperation(0.1, 0.2, '+', 2)); // Output: 0.3
console.log(currencyOperation(0.1, 0.2, '+', 3)); // Output: 0.300
console.log(currencyOperation(0.1, 0.2, '*', 4)); // Output: 0.0200


/* 6. Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.*/

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];


const unique = (duplicatesArray) => {
    let uniqueArray = [];
    let repeatedObjects = {};
    
    duplicatesArray.forEach((element) => {
        if (!repeatedObjects[element]) {
            uniqueArray.push(element);
            repeatedObjects[element] = true;
        }
    });

    return uniqueArray;
};

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]



/* 7. Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks.*/
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

//a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.

const getBookTitle = (array, bookId) => {
    let book = array.find((item) => item.id === bookId); 
    return book ? book.title : undefined;
};

console.log(getBookTitle(books, 3)); // Output: '1984'


//b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.

const getOldBooks = (array) => {
    return array.filter((book) => book.year < 1950);
};

console.log(getOldBooks(books));

//c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.

const addGenre = (array) => {
    return array.map((value) => {
        value.genre = 'classic';
        return value;
    });
};

console.log(addGenre(books));

//d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.

const getTitles = (array, authorInitial) => {
    return array
    .filter((book) => book.author.startsWith(authorInitial))
    .map((book) => book.title);
};

console.log(getTitles(books, 'G')); // Output: ['The Great Gatsby', '1984']



///e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.

const latestBook = (array) => {
    let latest = array[0]; 
    array.forEach((book) => {
        if (book.year > latest.year) {
            latest = book; 
        }
    });

    return latest;
};

// Testing the function
console.log(latestBook(books)); // Output: { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }


/*8. The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.*/

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')



//a) Create a new phoneBookDEF Map to store names beginning with D, E or F

let phoneBookDEF = new Map();


//b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

phoneBookDEF = new Map ([
    ['Dave', '0423234432'],
    ['Eve', '0456657765'],
    ['Felix', '0498878998']
]);

//c) Update the phone number for Caroline
phoneBookABC.set('Caroline', 'nil details')

//d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
let printPhoneBook = (contacts) => {
    contacts.forEach((value, key) => {
        cconsole.log(`Contact: ${key}, Phone Number: ${value}`);
    });
};

printPhoneBook(phoneBookABC)

//e) Combine the contents of the two individual Maps into a single phoneBook Map
let combinedPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
//) Print out the full list of names in the combined phone book

printPhoneBook(combinedPhoneBook); 

/*9. Given the below salaries object, perform the following tasks.*/ 

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

//a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

let sumSalaries = (salaries) => {
    return Object.values(salaries).reduce((total, salary) => total + salary, 0)
};

console.log(sumSalaries(salaries));


//b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

let topEarner = (salaries) => {
    let topPerson = "";
    let highestSalary = 0;

    for (let person in salaries){
        if (salaries[person] > highestSalary){
            highestSalary = salaries[person];
            topPerson = person;
        }
    }
    return topPerson;
};

console.log(topEarner(salaries));


/*10. The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:*/

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')



//a) Print the total number of minutes that have passed so far today

const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + 'minutes have passed');

//b) Print the total number of seconds that have passed so far today
const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(minutesPassed + 'seconds have passed');


//c) Calculate and print your age as: 'I am x years, y months and z days old'

const birthYear = 1998;
const birthMonth = 1; // February ( months are 0-indexed: 0 = January, 1 = February, 2 = March and so on)
const birthDay = 11;

const currentDay = new Date();

// Calculate differences
let years = currentDay.getFullYear() - birthYear;
let months = currentDay.getMonth() - birthMonth;
let days = currentDay.getDate() - birthDay;


if (days < 0) {
    const lastMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 0).getDate();
    days += lastMonth;
    months--;
}

if (months < 0) {
    years--;
    months += 12;
}


console.log(`I am ${years} years, ${months} months, and ${days} days old.`);


//d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

let date1 = {
    year: 2024,
    month: 2, 
    day: 15,
  };
  
  let date2 = {
    year: 2020,
    month: 4, 
    day: 20,
  };
  
  let daysInBetween = (date1, date2) => {

    let firstDate = new Date(date1.year, date1.month - 1, date1.day); 
    let secondDate = new Date(date2.year, date2.month - 1, date2.day);

    let diffInMilliseconds = Math.abs(firstDate - secondDate);
    let diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  
    return diffInDays;
  };
  
  console.log(daysInBetween(date1, date2)); 