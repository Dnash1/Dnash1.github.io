console.log("main.js responding");

// array that stores the entire deck
var fullDeck = [{"face": "ace", "val": 11, "suit": "clubs"},
				 {"face": "king", "val": 10, "suit": "clubs"},
				 {"face": "queen", "val": 10, "suit": "clubs"},
				 {"face": "jack", "val": 10, "suit": "clubs"},
				 {"face": "nine", "val": 9, "suit": "clubs"},
				 {"face": "eight", "val": 8, "suit": "clubs"},
				 {"face": "seven", "val": 7, "suit": "clubs"},
				 {"face": "six", "val": 6, "suit": "clubs"},
				 {"face": "five", "val": 5, "suit": "clubs"},
				 {"face": "four", "val": 4, "suit": "clubs"},
				 {"face": "three", "val": 3, "suit": "clubs"},
				 {"face": "two", "val": 2, "suit": "clubs"},
				 {"face": "ace", "val": 11, "suit": "hearts"},
				 {"face": "king", "val": 10, "suit": "hearts"},
				 {"face": "queen", "val": 10, "suit": "hearts"},
				 {"face": "jack", "val": 10, "suit": "hearts"},
				 {"face": "nine", "val": 9, "suit": "hearts"},
				 {"face": "eight", "val": 8, "suit": "hearts"},
				 {"face": "seven", "val": 7, "suit": "hearts"},
				 {"face": "six", "val": 6, "suit": "hearts"},
				 {"face": "five", "val": 5, "suit": "hearts"},
				 {"face": "four", "val": 4, "suit": "hearts"},
				 {"face": "three", "val": 3, "suit": "hearts"},
				 {"face": "two", "val": 2, "suit": "hearts"},
				 {"face": "ace", "val": 11, "suit": "spades"},
				 {"face": "king", "val": 10, "suit": "spades"},
				 {"face": "queen", "val": 10, "suit": "spades"},
				 {"face": "jack", "val": 10, "suit": "spades"},
				 {"face": "nine", "val": 9, "suit": "spades"},
				 {"face": "eight", "val": 8, "suit": "spades"},
				 {"face": "seven", "val": 7, "suit": "spades"},
				 {"face": "six", "val": 6, "suit": "spades"},
				 {"face": "five", "val": 5, "suit": "spades"},
				 {"face": "four", "val": 4, "suit": "spades"},
				 {"face": "three", "val": 3, "suit": "spades"},
				 {"face": "two", "val": 2, "suit": "spades"},
				 {"face": "ace", "val": 11, "suit": "diamonds"},
				 {"face": "king", "val": 10, "suit": "diamonds"},
				 {"face": "queen", "val": 10, "suit": "diamonds"},
				 {"face": "jack", "val": 10, "suit": "diamonds"},
				 {"face": "nine", "val": 9, "suit": "diamonds"},
				 {"face": "eight", "val": 8, "suit": "diamonds"},
				 {"face": "seven", "val": 7, "suit": "diamonds"},
				 {"face": "six", "val": 6, "suit": "diamonds"},
				 {"face": "five", "val": 5, "suit": "diamonds"},
				 {"face": "four", "val": 4, "suit": "diamonds"},
				 {"face": "three", "val": 3, "suit": "diamonds"},
				 {"face": "two", "val": 2, "suit": "diamonds"}];


// player and dealer hands
var playerHand = [];
var dealerHand = [];

function dealCard(recipient) {
	var rand = fullDeck[Math.floor(Math.random() * fullDeck.length)];
	recipient.push(rand);
	console.log(rand);
	handValue(recipient);
	// this function will deal another card to the specified recipient
	// take a random sample from the deck array and push it into the hand array
	// it should also check the new value of the hand in question
	// if the new value equals a match outcome, trigger that outcome
}

function handValue(recipient) {
	handVal = 0;
	for (var i = 0; i < recipient.length; i++) {
		handVal += recipient[i].val;
		console.log(handVal);
	}
	if (handVal < 21) {
		console.log("Under 21");
	} else if (handVal === 21) {
		console.log("Blackjack!");
	} else if (handVal > 21) {
		console.log("Busted");
	}
	// this function should evaluate the total value of a hand
	// once the value is found, decide if an outcome is triggered
}

