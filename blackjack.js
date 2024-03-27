let player = {
    name : "Maria",
    chips : 100
}

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " ";
let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" +  player.chips;


function getRandomCard () {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if(randomNumber > 10) {
        return 10;
    } else if(randomNumber === 1) {
        return 11;
    } else {
      return randomNumber;
    }
    
}

function startGame () {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame () {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";

    for(let i= 0; i < cards.length; i++) {
        cardsEl.textContent = cardsEl.textContent + cards[i] + " ";
    } 

    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo, you've got blackjack";
        hasBlackjack = true;
    } else {
        message = "You're out of the game";
        isAlive = false;   
    }

    messageEL.textContent = message;
}

function newCard () {

    if( isAlive === true && hasBlackjack === false) {
        console.log("Drawing a new card")
        let card = getRandomCard();
        sum = sum + card;
        cards.push(card);
        renderGame();
    }
    
}
 
