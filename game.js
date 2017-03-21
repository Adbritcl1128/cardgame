
let createDeck = require('./deck.js');
let cardValues = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
let players = ['Alex', 'Mo'];

function warGame() {
    let deck = createDeck();

    let numberOfWinsForPlayerOne = 0;
    let numberOfWinsForPlayerTwo = 0;
    let numberOfTies = 0;
    let date = new Date();
    let gameDate = date.getMonth() + '-' + date.getDay() + '-' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes();

    for (let i=0; i<52; i+=2) {

        if (cardValues.indexOf(deck[i]) > cardValues.indexOf(deck[i+1])) {

            numberOfWinsForPlayerOne++;
        } else if (cardValues.indexOf(deck[i]) < cardValues.indexOf(deck[i+1])) {

            numberOfWinsForPlayerTwo++;
        } else {

            numberOfTies++;
        }
    }

return {
  date: gameDate,
  players: [
    {
      name: players[0],
      numberOfWins: numberOfWinsForPlayerOne,
      winRatio: numberOfWinsForPlayerOne / 26
    },
    {
      name: players[1],
      numberOfWins: numberOfWinsForPlayerTwo,
      winRatio: numberOfWinsForPlayerTwo / 26
    }
  ],
  numberOfTies: numberOfTies
 };
}
