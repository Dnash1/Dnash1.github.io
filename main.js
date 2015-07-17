console.log("main.js responding");

// array that stores the entire deck
var fullDeck = [{face: "ace", val: 11, "suit": "clubs"},
				 {face: "king", val: 10, "suit": "clubs"},
				 {face: "queen", val: 10, "suit": "clubs"},
				 {face: "jack", val: 10, "suit": "clubs"},
				 {face: "ten", val: 10, "suit": "clubs"},
				 {face: "nine", val: 9, "suit": "clubs"},
				 {face: "eight", val: 8, "suit": "clubs"},
				 {face: "seven", val: 7, "suit": "clubs"},
				 {face: "six", val: 6, "suit": "clubs"},
				 {face: "five", val: 5, "suit": "clubs"},
				 {face: "four", val: 4, "suit": "clubs"},
				 {face: "three", val: 3, "suit": "clubs"},
				 {face: "two", val: 2, "suit": "clubs"},
				 {face: "ace", val: 11, "suit": "hearts"},
				 {face: "king", val: 10, "suit": "hearts"},
				 {face: "queen", val: 10, "suit": "hearts"},
				 {face: "jack", val: 10, "suit": "hearts"},
				 {face: "ten", val: 10, "suit": "hearts"},
				 {face: "nine", val: 9, "suit": "hearts"},
				 {face: "eight", val: 8, "suit": "hearts"},
				 {face: "seven", val: 7, "suit": "hearts"},
				 {face: "six", val: 6, "suit": "hearts"},
				 {face: "five", val: 5, "suit": "hearts"},
				 {face: "four", val: 4, "suit": "hearts"},
				 {face: "three", val: 3, "suit": "hearts"},
				 {face: "two", val: 2, "suit": "hearts"},
				 {face: "ace", val: 11, "suit": "spades"},
				 {face: "king", val: 10, "suit": "spades"},
				 {face: "queen", val: 10, "suit": "spades"},
				 {face: "jack", val: 10, "suit": "spades"},
				 {face: "ten", val: 10, "suit": "spades"},
				 {face: "nine", val: 9, "suit": "spades"},
				 {face: "eight", val: 8, "suit": "spades"},
				 {face: "seven", val: 7, "suit": "spades"},
				 {face: "six", val: 6, "suit": "spades"},
				 {face: "five", val: 5, "suit": "spades"},
				 {face: "four", val: 4, "suit": "spades"},
				 {face: "three", val: 3, "suit": "spades"},
				 {face: "two", val: 2, "suit": "spades"},
				 {face: "ace", val: 11, "suit": "diamonds"},
				 {face: "king", val: 10, "suit": "diamonds"},
				 {face: "queen", val: 10, "suit": "diamonds"},
				 {face: "jack", val: 10, "suit": "diamonds"},
				 {face: "ten", val: 10, "suit": "diamonds"},
				 {face: "nine", val: 9, "suit": "diamonds"},
				 {face: "eight", val: 8, "suit": "diamonds"},
				 {face: "seven", val: 7, "suit": "diamonds"},
				 {face: "six", val: 6, "suit": "diamonds"},
				 {face: "five", val: 5, "suit": "diamonds"},
				 {face: "four", val: 4, "suit": "diamonds"},
				 {face: "three", val: 3, "suit": "diamonds"},
				 {face: "two", val: 2, "suit": "diamonds"}];

// gives click events to hit and stand buttons
$("#hit").click(function() {
	dealCard(playerHand);
});
$("#stand").click(function() {

});
$("#new").click(function() {
	newMatch(playerHand);
});

// player and dealer hands
var playerHand = [];
var dealerHand = [];

// player starting bankroll and pot
var bankRoll = 1000;
var pot = 0;

function placeBet(amt) {
	if (amt > bankRoll) {
		console.log("You don't have that much, pobrecito");
	} else {
		bankRoll = (bankRoll - amt);
		pot = (pot + amt);
	}
	// allows the player to place a bet on the next hand
}

function dealCard(recipient) {
	var rand = fullDeck[Math.floor(Math.random() * fullDeck.length)];
	recipient.push(rand);
	fullDeck.pop(rand);
	console.log(rand);
	handValue(recipient);
	// this function will deal another card to the specified recipient
	// take a random sample from the deck array and push it into the hand array, while popping it from the deck
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
		if (recipient === playerHand) {
			console.log("Player Blackjack!");
			bankRoll = (bankRoll + (pot * 2));
			pot = 0;
			newMatch(playerHand);
			newMatch(dealerHand);
		} else if (recipient === dealerHand) {
			console.log("Dealer Blackjack!");
			pot = 0;
			newMatch(dealerHand);
			newMatch(playerHand);
		}
		
	} else if ((handVal > 21) && (isAce(recipient)) === false) {
		if (recipient === playerHand) {
			console.log("Player busted!");
			pot = 0;
			newMatch(playerHand);
			newMatch(dealerHand);
		} else if (recipient === dealerHand) {
			console.log("Dealer busted!");
			bankRoll = (bankRoll + (pot * 2));
			pot = 0;
			newMatch(dealerHand);
			newMatch(playerHand);
		}
			
	} else if ((handVal > 21) && (isAce(recipient)) === true) {
		console.log("Ace present, reducing");
		reduceAce(recipient);
		handValue(recipient);
	}
	return handVal;
	// this function should evaluate the total value of a hand
	// once the value is found, decide if an outcome is triggered
	// if a high value ace is present, run reduceAce and re-evaluate
	// once outcome is reached, assign pot accordingly
}

var index = fullDeck.map(function(e) { return e.face; }).indexOf('ace');

function isAce(recipient) {
	var index = recipient.map(function(e) { return e.val; }).indexOf(11);
	if (index === -1) {
		return false;
	} else {
		return true;	
	}
	// this function checks a hand to see if a high-value ace is present
}

function reduceAce(recipient) {
	for (var i = 0; i < recipient.length; i++) {
				 	var index = recipient.map(function(e) { return e.val; }).indexOf(11);
				 		if (index === -1) {
				 			break;
				 		}
				 	recipient[index].val = 1;
				 	break;
				 }
	// if a high-value ace is present, it iterates through a hand and reduces it to 1, then breaks
	// if no high value ace is present, it breaks
}

function newMatch(recipient) {
	for (var i = 0; i < recipient.length; i++) {
		if (recipient[i].val === 1) {
			recipient[i].val = 11;
			fullDeck.push(recipient[i]);
		}	else {
			fullDeck.push(recipient[i]);
		}
	}
	recipient.splice(0, recipient.length);
	console.log("Hand re-shuffled")
	// this function returns all cards in play to the original deck
	// it also checks for any low-value aces and resets them to 11 before returning them
}

function dealerTurn() {
	var pScore = handValue(playerHand);
	var dScore = handValue(dealerHand);
	if (dScore >= pScore) {
		console.log("Dealer wins!");
	} else if (pScore > dScore) {
		while ((pScore > dScore) && (dScore < 21)) {
			console.log("Dealer draws...");
			setTimeout(dealCard(dealerHand), 2000)
			setTimeout(handValue(dealerHand), 4000)
		}
		console.log("Dealer wins!");
		pot = 0;
		newMatch(playerHand);
		newMatch(dealerHand);
	}
	// this function will activate a dealer's turn when the player has chosen to stand
	// the dealer must continue to draw cards until he either beats the player's hand or busts
}
