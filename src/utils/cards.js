// export const cards = [
//     {
//       id: 1,
//       suit: 'heart',
//       word: 'ace',
//       digit: 14,
//       src: 'http://pngimg.com/uploads/cards/small/cards_PNG8476.png'
//     },
//     {
//       id: 2,
//       suit: 'heart',
//       word: 2,
//       src: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/924/2D__57497.1440113502.480.480.png?c=2'
//     },
//     {
//       id: 3,
//       suit: 'heart',
//       word: 3,
//       src: 'https://w7.pngwing.com/pngs/892/833/png-transparent-playing-card-hearts-contract-bridge-suit-king-heart-playing-cards-love-king-text-thumbnail.png'
//     },
//     {
//       id: 4,
//       suit: 'heart',
//       word: 4,
//       src: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/926/4H__83243.1440113515.480.480.png?c=2'
//     },
//     {
//       id: 5,
//       suit: 'heart',
//       word: 5,
//       src: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/927/5S__90574.1440113521.480.480.png?c=2'
//     },
//     {
//       id: 6,
//       suit: 'heart',
//       word: 6,
//       src: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/928/6D__92916.1440113530.480.480.png?c=2'
//     },
//     {
//       id: 7,
//       suit: 'heart',
//       word: 7,
//       src: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/929/7C__93490.1440113539.480.480.png?c=2'
//     },
//     {
//       id: 8,
//       suit: 'heart',
//       word: 8,
//       src: 'http://pngimg.com/uploads/cards/small/cards_PNG8477.png'
//     },
//     {
//       id: 9,
//       suit: 'heart',
//       word: 9,
//       src: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/931/9D__67286.1440113561.480.480.png?c=2'
//     },
//     {
//       id: 10,
//       suit: 'heart',
//       word: 10,
//       src: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/932/10H__11470.1440113568.480.480.png?c=2'
//     },
//     {
//       id: 11,
//       suit: 'heart',
//       suit: 'club',
//       digit: 11,
//       src: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/923/JC__86231.1440113428.480.480.png?c=2'
//     },
//     {
//       id: 12,
//       suit: 'heart',
//       word: 'queen',
//       digit: 12,
//       src: 'https://clipart-best.com/img/cards/cards-clip-art-28.png'
//     },
//     {
//       id: 13,
//       suit: 'heart',
//       word: 'king',
//       digit: 13,
//       src: 'https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/933/KH__01216.1440113580.480.480.png?c=2'
//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     },
//   ]

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

