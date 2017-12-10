// JavaScript Document

//create object with letter, lives, answer arrays, wins, message
$(document).ready(function() {
	var lastLetter = []
	var hangmanGame = {
		letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
		lives: 12,
		wins: 0,
		userGuesses: [],
		answers: [ "freddy", "jason", "michael", "leatherface", "candyman", "hannibal", "norman", "chucky", "pennywise", "cujo", "pinhead" ],
	
		messages: {
				win: 'Winner, winner, chicken dinner!',
				lose: 'Death!',
				character: 'Please enter a valid letter'
			  },
		
		
		
		wordDisplay: function() {
			for (i = 0; i < gameWord.length; i++) {
				//var indexNum = gameWord.length[i];
				//console.log(indexNum);
				var letterBox = $("<div class='letter-box index-" + gameWord[i] + "'>");
				console.log("letter: " + gameWord[i]);
				$("#answer-reveal").append(letterBox);
			};
		},
		
		gameAction: function() {
			for (var i = 0; i < gameWord.length; i++) {
				if (lastLetter == gameWord[i]) {
					//console.log("hi");
					console.log("gameword index: " + gameWord[i]);
					$(".index-" + gameWord[i]).text(lastLetter);
					};
			};
		}
	};

		//generate random word
		var	gameWord = hangmanGame.answers[Math.floor(Math.random() * hangmanGame.answers.length)];
	 	
	 	

		//console tests
		console.log("test");
		console.log(gameWord);
		console.log(gameWord.length);	
		console.log(hangmanGame.wins);
		console.log(hangmanGame.lives);

		var wins = hangmanGame.wins
		var lives = hangmanGame.lives

		$("#wins-display").append("<p>" + wins + "</p>");
		$("#guess-remain").html("<p>" + lives + "</p>");

		//generate underlines the length of gameWord
		$("html").one("keyup", function() {
			hangmanGame.wordDisplay();
		});

		
				
		document.onkeyup = function(input) {
			var userInput = (input.key).toLowerCase();
				if (hangmanGame.lives > 0) {
					hangmanGame.userGuesses.push(userInput);
					console.log(hangmanGame.userGuesses);
					var guessStrLenght = hangmanGame.userGuesses.length;
					lastLetter.push(userInput);
					//console.log("length: " + guessStrLength);
					//console.log("user array: " + hangmanGame.userGuesses);
					console.log("Last Letter: " + lastLetter);
					hangmanGame.gameAction();
					lastLetter = [];
					console.log("last letter: " + lastLetter);
					
				};
			};
});
		


//if lettersGuessed(last character) === any index of gameword, write letter to word reveal in appropriate position

		//correct guesses, add letters

//if not in game word and not in used letters area, write to used letters area and --		lives

		//incorrect guesses add letters

//else do nothing
		


		//loop until answers-reveal length == gameWord length or lives <1

		//display win or lose message

		//for each win, ++wins

		//change image

		//play song (add play/pause toggle)

		//reset game (clear user array, clear gameword and used letters divs, select a new random gameword, display underlined boxes to gameword area)













