
  let suits = [ '♡', "♢", "♣", "♠" ];
  let ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
  
  let deck = []

 export const makeDeck = () => {
    deck = [];
    for( let i = 0; i < suits.length; i++ ) {
      for( let j = 0; j < ranks.length; j++ ) {       
        let card = {};
        card.suit = suits[i];
        card.rank = ranks[j];       
        deck.push(card);
      }
    }
    return deck;
  }

