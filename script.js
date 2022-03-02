import Deck from "./deck.js"


const computerCardSlot = document.getElementById("computer-card-slot")
const playerCardSlot = document.getElementById("player-card-slot")
let computerDeckElement = parseInt(document.getElementById("computer-cnt"))
let playerDeckElement = parseInt(document.getElementById("computer-cnt"))

let scoreComputer = 0;
let scorePlayer = 0;



let playerDeck, computerDeck, stop = 16;

function Play(){
    StartGame();
    
    
    document.getElementsByClassName("player-deck")[0].addEventListener("click", () => {
        if(stop == 0){
            alert("Computer " + scoreComputer + " - " + scorePlayer + " Player" )
            return;
        }
        else{
            stop--;
            flip();
        }
      })

}

Play();

function StartGame(){
    const deck = new Deck();
    deck.shuffle();
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));

}

function flip(){
    const playerCard = playerDeck.pop();
    const computerCard = computerDeck.pop();

    document.getElementById("computer-card-slot").innerHTML = computerCard;
    document.getElementById("player-card-slot").innerHTML = playerCard;

 
    if(victorie(playerCard,computerCard) == -1){
        document.getElementById("score-computer").innerHTML = ++scoreComputer;
    }
    if(victorie(playerCard,computerCard) == 1){
        document.getElementById("score-player").innerHTML = ++scorePlayer;
    }

    playerDeck.push(playerCard);
    computerDeck.push(computerCard);

    document.getElementById("computer-cnt").innerHTML = stop;
    document.getElementById("player-cnt").innerHTML = stop;


}

function victorie(playerCard, computerCard) {

    if(playerCard == computerCard)
        return 0;

    if(playerCard == "🐺" && computerCard == "🐐")
        return 1;
    if(playerCard == "🐐" && computerCard == "🥬")
        return 1;
    if(playerCard == "🥬" && computerCard == "🐺")
        return 1;
    if(playerCard == "🎯" && computerCard != "🎯")
        return 1;

    if(computerCard == "🐺" && playerCard == "🐐")
        return -1;
    if(computerCard == "🐐" && playerCard == "🥬")
        return -1;
    if(computerCard == "🥬" && playerCard == "🐺")
        return -1;
    if(computerCard == "🎯" && playerCard != "🎯")
        return -1;

}

