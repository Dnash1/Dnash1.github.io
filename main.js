console.log("main.js responding");

// array that stores the entire deck
var fullDeck = [{face: "ace", val: 11, "suit": "clubs", "url": "ace_of_clubs.png"},
				 {face: "king", val: 10, "suit": "clubs", "url": "king_of_clubs.png"},
				 {face: "queen", val: 10, "suit": "clubs", "url": "queen_of_clubs.png"},
				 {face: "jack", val: 10, "suit": "clubs", "url": "jack_of_clubs.png"},
				 {face: "ten", val: 10, "suit": "clubs", "url": "10_of_clubs.png"},
				 {face: "nine", val: 9, "suit": "clubs", "url": "9_of_clubs.png"},
				 {face: "eight", val: 8, "suit": "clubs", "url": "8_of_clubs.png"},
				 {face: "seven", val: 7, "suit": "clubs", "url": "7_of_clubs.png"},
				 {face: "six", val: 6, "suit": "clubs", "url": "6_of_clubs.png"},
				 {face: "five", val: 5, "suit": "clubs", "url": "5_of_clubs.png"},
				 {face: "four", val: 4, "suit": "clubs", "url": "4_of_clubs.png"},
				 {face: "three", val: 3, "suit": "clubs", "url": "3_of_clubs.png"},
				 {face: "two", val: 2, "suit": "clubs", "url": "2_of_clubs.png"},
				 {face: "ace", val: 11, "suit": "hearts", "url": "ace_of_hearts.png"},
				 {face: "king", val: 10, "suit": "hearts", "url": "king_of_hearts.png"},
				 {face: "queen", val: 10, "suit": "hearts", "url": "queen_of_hearts.png"},
				 {face: "jack", val: 10, "suit": "hearts", "url": "jack_of_hearts.png"},
				 {face: "ten", val: 10, "suit": "hearts", "url": "10_of_hearts.png"},
				 {face: "nine", val: 9, "suit": "hearts", "url": "9_of_hearts.png"},
				 {face: "eight", val: 8, "suit": "hearts", "url": "8_of_hearts.png"},
				 {face: "seven", val: 7, "suit": "hearts", "url": "7_of_hearts.png"},
				 {face: "six", val: 6, "suit": "hearts", "url": "6_of_hearts.png"},
				 {face: "five", val: 5, "suit": "hearts", "url": "5_of_hearts.png"},
				 {face: "four", val: 4, "suit": "hearts", "url": "4_of_hearts.png"},
				 {face: "three", val: 3, "suit": "hearts", "url": "3_of_hearts.png"},
				 {face: "two", val: 2, "suit": "hearts", "url": "2_of_hearts.png"},
				 {face: "ace", val: 11, "suit": "spades", "url": "ace_of_spades.png"},
				 {face: "king", val: 10, "suit": "spades", "url": "king_of_spades.png"},
				 {face: "queen", val: 10, "suit": "spades", "url": "queen_of_spades.png"},
				 {face: "jack", val: 10, "suit": "spades", "url": "jack_of_spades.png"},
				 {face: "ten", val: 10, "suit": "spades", "url": "10_of_spades.png"},
				 {face: "nine", val: 9, "suit": "spades", "url": "9_of_spades.png"},
				 {face: "eight", val: 8, "suit": "spades", "url": "8_of_spades.png"},
				 {face: "seven", val: 7, "suit": "spades", "url": "7_of_spades.png"},
				 {face: "six", val: 6, "suit": "spades", "url": "6_of_spades.png"},
				 {face: "five", val: 5, "suit": "spades", "url": "5_of_spades.png"},
				 {face: "four", val: 4, "suit": "spades", "url": "4_of_spades.png"},
				 {face: "three", val: 3, "suit": "spades", "url": "3_of_spades.png"},
				 {face: "two", val: 2, "suit": "spades", "url": "2_of_spades.png"},
				 {face: "ace", val: 11, "suit": "diamonds", "url": "ace_of_diamonds.png"},
				 {face: "king", val: 10, "suit": "diamonds", "url": "king_of_diamonds.png"},
				 {face: "queen", val: 10, "suit": "diamonds", "url": "queen_of_diamonds.png"},
				 {face: "jack", val: 10, "suit": "diamonds", "url": "jack_of_diamonds.png"},
				 {face: "ten", val: 10, "suit": "diamonds", "url": "10_of_diamonds.png"},
				 {face: "nine", val: 9, "suit": "diamonds", "url": "9_of_diamonds.png"},
				 {face: "eight", val: 8, "suit": "diamonds", "url": "8_of_diamonds.png"},
				 {face: "seven", val: 7, "suit": "diamonds", "url": "7_of_diamonds.png"},
				 {face: "six", val: 6, "suit": "diamonds", "url": "6_of_diamonds.png"},
				 {face: "five", val: 5, "suit": "diamonds", "url": "5_of_diamonds.png"},
				 {face: "four", val: 4, "suit": "diamonds", "url": "4_of_diamonds.png"},
				 {face: "three", val: 3, "suit": "diamonds", "url": "3_of_diamonds.png"},
				 {face: "two", val: 2, "suit": "diamonds", "url": "2_of_diamonds.png"}];

// gives click events to hit and stand buttons
$("#hit").click(function() {
	dealCard(playerHand);
});
$("#stay").click(function() {
	dealerTurn();
});
$("#new").click(function() {
	newMatch(playerHand);
	newMatch(dealerHand);
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
	handEval(recipient);
	if (recipient === playerHand) {
		$("#ph").append("<img id='cardimg' src='./assets/cards/" + rand.url + "' />");
	}
	if (recipient === dealerHand) {
		$("#dh").append("<img id='cardimg' src='./assets/cards/" + rand.url + "' />");
	}
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
	return handVal;
	// necessary to have a function that only adds the hand up, nothing else
}

function handEval(recipient) {
	handVal = 0;
	for (var i = 0; i < recipient.length; i++) {
		handVal += recipient[i].val;
		console.log(handVal);
	}
	if (handVal < 21) {
		if (recipient === playerHand) {
			console.log("Player under 21");	
		} else if (recipient === dealerHand) {
			console.log("Dealer under 21");
			dealerTurn();
		}
		
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
		handEval(recipient);
	}
	return handVal;
	// this function should evaluate the total value of a hand
	// once the value is found, decide if an outcome is triggered
	// if a high value ace is present, run reduceAce and re-evaluate
	// once outcome is reached, assign pot accordingly
}

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
	// if a high-value ace is present, iterates through a hand and reduces it to 1, then breaks
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
	// this function returns all cards in a hand to the original deck
	// it also checks for any low-value aces and resets them to 11 before returning them
}

function dealerTurn() {
	var pScore = handValue(playerHand);
	var dScore = handValue(dealerHand);
	if (dScore < pScore) {
		console.log("Dealer drawing");
		dealCard(dealerHand);
	} else if (dScore >= pScore) {
		console.log("Dealer wins!");
		pot = 0;
		newMatch(dealerHand);
		newMatch(playerHand);
	}
	// this function will activate a dealer's turn when the player has chosen to stand
	// the dealer must continue to draw cards until he either beats the player's hand or busts
}

function cardTest() {
	$("#ph").append("<img id='cardimg' src='./assets/cards/2_of_diamonds.png' />");
	// $("<div>").attr("class", "card").css("background-image", "url(./assets/cards/2_of_clubs.png)").appendTo("#ph");
}