
//The DOMContentLoaded is an event listener that will make the code run if the html is loaded and parsed- ensures all the DOM elements are available and ready for manipulation//
document.addEventListener('DOMContentLoaded', () => {
    alert ('Welcome to the Dice Roller, created by John!\n\n' +
        'Instructions:\n' +
        '- Click "Add Dice" to add up to 7 dice.\n' +
        '- Select the type of dice from the dropdown.\n' +
        '- Delete dice by clicking on the x sign found on the top right corner  \n'+
        '- Click "Roll Dice" to roll all added dice.\n' +
        '- Enjoy rolling your dice!');
  
  
      const diceContainer = document.getElementById('dice-container');
      const diceTypeSelect = document.getElementById('dice-type');
      const addDiceButton = document.getElementById('add-dice');
      const diceList = document.getElementById('dice-list');
      const rollDiceButton = document.getElementById('roll-dice');
      const resultsDiv = document.getElementById('results');
  
      //(list) reference made in conjuction to html elements using an ID system- will connect the script and elements to form functionaity//
  
      const backgroundMusic = document.getElementById('music');

  
      //this array will contain the different dices- left empty as the user will have the ability to add more dice to the array up to 7 dices
  
      let diceArray = [];
  
      // Add dice button event listener 
      // @param - the user can only have up to 7 dices -if
      // allows user to add a type of dice between the different givr=en dice in the array
      // the createelement div will represent the added dice
      // a special dice was created in addition that will have value between 00-90
      
      addDiceButton.addEventListener('click', () => {
          if (diceArray.length < 7) {
              const diceType = diceTypeSelect.value;
              const diceElement = document.createElement('div');
              diceElement.classList.add('dice');
              diceElement.textContent = diceType === 'special-d10' ? 'd10 (00-90)' : `d${diceType}`;
  
              // Create a delete button for the dice for the user
              const deleteButton = document.createElement('button');
              deleteButton.textContent = 'x';
              deleteButton.classList.add('delete-button');
              deleteButton.addEventListener('click', () => {
                  const index = Array.from(diceList.children).indexOf(diceElement);
                  diceArray.splice(index, 1);
                  diceElement.remove();
              });
  
              //append adds delete button to the existing dice elements
              //adds additional dices on the set
              //keeps the dice type in sync with the dice elements
              diceElement.appendChild(deleteButton);
              diceList.appendChild(diceElement);
              diceArray.push(diceType);
          } else {
              alert('You can only add up to 7 dice.');
          }
    });
      // Roll dice button event listener
      // an event is created on click 
      //an empty array is in place to store results of dice rolls
      // (if) a special dice (d10) will only push results between 00-90
      // (else) the rest of rolls will show the value of the given dice type and its set array.
      rollDiceButton.addEventListener('click', () => {
          let results = [];
          diceArray.forEach(dice => {
              if (dice === 'special-d10') {
                  const roll = Math.floor(Math.random() * 10) * 10;
                  results.push(roll === 0 ? '00' : roll);
              } else {
                  const roll = Math.floor(Math.random() * dice) + 1;
                  results.push(roll);
              };
          });
          displayResults(results);
     
           // Function to display results
      function displayResults(results) {
          resultsDiv.innerHTML = '';
          resultsDiv.textContent = `Results: ${results.join(', ')}`;
        }
    });
          // Play background music after user interaction

          document.body.addEventListener('click', () => {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
            }
        });
    
});