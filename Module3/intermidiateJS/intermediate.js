/*1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.*/


let capitaliseWords = function(str){
    const words = str.split(" ");

    for (let i = 0; i <words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    } 
    return words.join(" ");

}


const mySentence = "monday is a drag."; 
console.log(capitaliseWords(mySentence)); // Monday Is A Drag.

const mySentence1 = "i love dogs."
console.log(capitaliseWords(mySentence1)); // I Love Dogs.

/*Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (…) added to the end if it was too long, or the original text otherwise.

b) Write another variant of the truncate function that uses a conditional operator.

console.log(truncate('This text will be truncated if it is too long', 25))

// This text will be truncat... */

function truncate(str, max, ending = '...'){
    if (str.length > max) {
        return str.slice(0, max - ending.length) + ending;
    } else {
        return str;
    }
}

let longString = "Hamid is GOAT and is the direct descendant of the JS Gods";
let shortString = "Hamid is GOAT an"
console.log(truncate(longString, 16));
console.log(truncate(shortString, 16));



/* 3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case. */


const animals = ['Tiger', 'Giraffe']
console.log(animals); 


