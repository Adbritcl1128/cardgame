
let createDeck = require('./deck.js');
let cardValues = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

function warGame() {
    let deck = createDeck();

    let numberOfWinsForPlayerOne = 0;
    let numberOfWinsForPlayerTwo = 0;
    let numberOfTies = 0;

    for (let i=0; i<52; i+=2) {
      
        if (cardValues.indexOf(deck[i]) > cardValues.indexOf(deck[i+1])) {

            numberOfWinsForPlayerOne++;
        } else if (cardValues.indexOf(deck[i]) < cardValues.indexOf(deck[i+1])) {

            numberOfWinsForPlayerTwo++;
        } else {

            numberOfTies++;
        }
    }

}

warGame();

//+= says goes through 52 cards 2 at a time
//after for loop log ( deck[i, deck[i+1]) will print out two cards at a time
