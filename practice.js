let cardValues = [2,3,4,5,6,7,8,9,10,11,12,13,14];

module.exports = function cardDeck () {
    let deck = [];

    for (let i=0; i<4; i++) {
      deck = deck.concat(cardValues);
  }

    return deck;
};



//function creates an array which will hold cards and then will return the collection of cards.
//push puts something into an array
//deck=object push=function for line 4
//on line 7......concat creates a whole new array so it needs to be put into the original array we created deck
//we want to allow function to be used elsewhere
