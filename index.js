// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //   debugger;
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);

const Cards =["Samuel","Kirori","Kimani"];
const messages=writeCards(Cards);
  function writeCards(Cards){
    const thankYouMessages=[];

    for(let i=0; i < Cards.length; i++){
        thankYouMessages.push(`Thank you, ${Cards[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
  }
console.log(messages)

  function countDown(number1){
    for(let i=number1; i>=0; i--){
        console.log(i);
    }
  }
  countDown(number1)
