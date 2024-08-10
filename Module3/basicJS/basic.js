//What are the results of these expressions? (answer first, then use console.log() to check)
let number1 = "" + 1 + 0; // answer 10

console.log(number1);

number1 = "" + -1 + 0; // answer -10

console.log(number1);

number1 = true + false; // answer 1
console.log(number1);

number1 = !true; // answer false
console.log(number1);

number1 = 6 / "3"; //answer 2
console.log(number1);

number1 = "2" * "3"; //answer 6
console.log(number1);

number1 = 4 + 5 + "px"; //answer 9px
console.log(number1);

number2 = "$" + 4 + 5; //answer $45?
console.log(number2);

number2 = "4" - 2; // answer 2
console.log(number2);

number2 = " -9 " + 5; // '-9 5'
console.log(number2);

number2 = " -9 " - 5; // -14
console.log(number2);

number2 = null + 1; // 1
console.log(number2);

number2 = undefined + 1; // NaN
console.log(number2);

number2 = undefined == null; // true
console.log(number2);

number2 = " \t \n" - 2; // NaN
console.log(number2);

//Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3";
let four = 4;
let thirty = 30;
//what is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);

let lessThan1 = three < four;
let lessThan2 = thirty < four; // this is not giving the right answer , change the value from string to an integer
console.log(lessThan1);
console.log(lessThan2);

//Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true"); //WILL NOT PRINT AS ZERO IS A FALSE VALUE
if ("0") console.log("#2 zero is true"); //WILL PRINT SINCE THE STRING CONNOTES A VALUE THAT IS TRUE
if (null) console.log("null is true"); //WILL NOT PRINT
if (-1) console.log("negative is true"); // WILL PRINT ANY INTEGER NUMBER (-+) ASIDE FROM ZERO WILL CONNOTE A VALUE THAT IS TRUE
if (1) console.log("positive is true"); // WILL PRINT ANY INTEGER NUMBER (-+) ASIDE FROM ZERO WILL CONNOTE A VALUE THAT IS TRUE

//Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 2,
  b = 3;

/*
result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
*/

let result = `${a} + ${b} is `;
result += a + b < 10 ? "less than 10" : "greater than 10";

//+= it is a shorthand/ shortcut operator then it adds value from the  right side on to the left side then will reassign the answer back to the result value

// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

//Function Expression Syntax -
function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting("John")); // Test it, should output: "Hello John!"

//-----
getGreeting = (name) => {
  "Hello " + name + "!";
};
console.log(getGreeting("Jake"));

/*6
a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator. */

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montaya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if (person.numFingers === 6) {
      return "You killed my father. PREPARE TO DIE!";
    }
    return "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

/*  The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations.
*/

/*const basketballGame = {
score: 0,
freeThrow() {
this.score++;
},
basket() {
this.score += 2;
},
threePointer() {
this.score += 3;
},
halfTime() {
console.log('Halftime score is '+this.score);
}
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
*/

//a.
const basketballGame = {
  score: 0,
  freeThrow() {
    console.log(`Free Throw action: ${this.score}`);
    this.score++;
    console.log(`After free Throw action: ${this.score}`);
    return this;
  },
  basket() {
    console.log(`Basket action: ${this.score}`);
    this.score += 2;
    console.log(`After Basket action: ${this.score}`);
    return this;
  },
  threePointer() {
    console.log(`Three Pointer action: ${this.score}`);
    this.score += 3;
    console.log(`After Three Pointer action: ${this.score}`);
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
};

/* b.

 basketballGame = {
  score: 0,
  freeThrow() {
    console.log(`Free Throw action: ${this.score}`);
    this.score ++;
    console.log(`After free Throw action: ${this.score}`);
    return this;
  },
  basket() {
    console.log(`Basket action: ${this.score}`);
    this.score += 2;
    console.log(`After Basket action: ${this.score}`);
    return this;
  },
  threePointer() {
    console.log(`Three Pointer action: ${this.score}`);
    this.score += 3;
    console.log(`After Three Pointer action: ${this.score}`);
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  fulltime() {
    console.log("Final score is " + this.score);
    return this;
  }
};

basketballGame = {
  score: 0,
  foul: 0,
  freeThrow() {
    console.log(`Free Throw action: ${this.score}`);
    this.score ++;
    console.log(`After free Throw action: ${this.score}`);
    return this;
  },
  makeFoul(){
    this.foul ++;
    return this;
  },
  basket() {
    console.log(`Basket action: ${this.score}`);
    this.score += 2;
    console.log(`After Basket action: ${this.score}`);
    return this;
  },
  threePointer() {
    console.log(`Three Pointer action: ${this.score}`);
    this.score += 3;
    console.log(`After Three Pointer action: ${this.score}`);
    return this;
  },
  halfTime() {
    console.log(`Halftime score is ${this.score} and with  ${this.foul} foul`);
    return this;
  },
  fulltime() {
    console.log(`Final score is  ${this.score} and with  ${this.foul} foul`);
    return this;
  }
};
//modify each of the above object methods to enable function chaining as below:
console.log(basketballGame
.basket().freeThrow().freeThrow().basket().makeFoul().threePointer().makeFoul().halfTime() //Game 1
.basket().freeThrow().makeFoul().freeThrow().basket().threePointer().halfTime().makeFoul() //Game 2
.fulltime()
); //Show the final score 

*/

/*8  The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for…in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object
*/

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
};

const perth = {
  name: "Perth",
  population: 2_143_000,
  state: "WA",
  founded: "12 August 1829",
};

function printCityDetails(city) {
  for (let details in city) {
    console.log(`${details}: ${city[details]}`);
  }
}

printCityDetails(sydney);
printCityDetails(perth);

/*9. Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent */

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = teamSports;

moreSports.push("Tennis"); // adds to the end
moreSports.unshift("Badminton", "Swimming"); // adds to the front

console.log(moreSports);

let dog2 = dog1;
dog2 = "Teddy";

console.log(dog1); // bingo
console.log(dog2); // teddy

let cat2 = cat1;

cat2.name = "Feline";

console.log(cat1.name);
console.log(cat2.name);

console.log(teamSports); //Since arrays and objects are stored by reference, modifying moreSports (which references the same array as teamSports) changes the original teamSports array.
console.log(dog1); // Strings (and other primitives like numbers and booleans) are stored by value, not by reference. Therefore, changing dog2 after assignment does not affect dog1.
console.log(dog2); // Objects are stored by reference, so modifying cat2 (which references the same object as cat1) changes the original cat1 object.

//let moreSports = [...teamSports];  Using the spread operator to create a shallow copy

//moreSports.push('Tennis');
//moreSports.unshift('Badminton', 'Swimming');

//console.log("moreSports:", moreSports); // Prints the updated moreSports array
//console.log("teamSports:", teamSports); // Prints the original teamSports array (unchanged)

//let cat2 = { ...cat1 };  Using the spread operator to create a shallow copy of cat1

//cat2.name = 'Feline';

//onsole.log("cat1.name:", cat1.name); // Output: Fluffy (unchanged)
//console.log("cat2.name:", cat2.name); // Output: Feline

/*10. The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive. */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;

  this.canDrive = function () {
    return this.age >= 18;
  };
}

//a.
let john = new Person("John", 30);
//b.
let nathan = new Person("Nathan", 31);
//c.

console.log("John's Properties:");
console.log("Name:", john.name); // Output: Name: John
console.log("Age:", john.age); // Output: Age: 30
console.log("Human:", john.human); // Output: Human: true

console.log("\nNathan's Properties:"); // \n isa a newline character which adds a blank line  fopr readabilty
console.log("Name:", nathan.name); // Output: Name: Nathan
console.log("Age:", nathan.age); // Output: Age: 25
console.log("Human:", nathan.human); // Output: Human: true

// Step 3: Create a third person using the PersonClass
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    this.canDrive = function () {
      return this.age >= 18;
    };
  }
}

let stephen = new PersonClass("Stephen", 22);

console.log("\nStephen's Properties:"); //
console.log("Name:", stephen.name); // Output: Name: Stephen
console.log("Age:", stephen.age); // Output: Age: 25
console.log("Human:", stephen.human); // Output: Human: true

//4. 
console.log(stephen.name + " can drive: " + stephen.canDrive());
