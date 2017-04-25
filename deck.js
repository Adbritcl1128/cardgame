

module.exports = function cardDeck () {
  let shuffleDeck = [];
  let cardValues = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
  let card = 1;

  for (let i=0; i<52; i++) {
    deck = deck.concat(deck[Math.floor(Math.random()*deck.length)]);

    if(card === 11){
      shuffleAr.push('J');
    }else if (card === 12){
      shuffleAr.push('Q');
    }else if (card === 13) {
      shuffleAr.push('K');
    }else if (card === 14){
      shuffleAr.push('A');
    }else {
      shuffleAr.push(card);
    }
  }

  return (shuffleDeck);
};







//function creates an array which will hold cards and then will return the collection of cards.
//push puts something into an array
//deck=object push=function for line 4
//on line 7......concat creates a whole new array so it needs to be put into the original array we created deck
//we want to allow function to be used elsewhere
