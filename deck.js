

module.exports = function cardDeck () {
  let cardValues = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    let shuffleAr = [];
    let card = 1;

    for (let j=0;j<13;j++){
      card ++;
      for( let i=0; i <4; i++){
        if (card === 11){
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
    }

    let exchange;
    let temporary;

    for (let a = shuffleAr.length - 1; a > 0; a--) {
      exchange = Math.floor(Math.random() * a);
      temporary = shuffleAr[a];
      shuffleAr[a] = shuffleAr[exchange];
      shuffleAr[exchange] = temporary;
    }

    return (shuffleAr);
  };






//function creates an array which will hold cards and then will return the collection of cards.
//push puts something into an array
//deck=object push=function for line 4
//on line 7......concat creates a whole new array so it needs to be put into the original array we created deck
//we want to allow function to be used elsewhere
