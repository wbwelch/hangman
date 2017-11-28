// JavaScript Document

//create object with letter, lives, answer arrays, wins, message
$(document).ready(function() {
	
	var hangmanGame = {
		letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
		lives: 12,
		wins: 0,
		userGuesses: [],
		answers: [ "Freddy", "Jason", "Michael", "Leatherface", "Candyman", "Hannibal", "Norman", "Chucky", "Pennywise", "Cujo", "Pinhead" ],
		messages: {
				win: 'Winner, winner, chicken dinner!',
				lose: 'Death!',
				character: 'Please enter a valid letter'
			  },

	};

		//generate random word
		var gameWord = hangmanGame.answers[Math.floor(Math.random() * hangmanGame.answers.length)];
	 	gameWord.split()

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
			for (i = 0; i < gameWord.length; i++) {
				var letterBox = $("<div class='letter-box'></div>");
				console.log(gameWord[i]);
			//	letterBox.text(gameWord[i]); //use when time to write letters to screen
				$("#answer-reveal").append(letterBox);
			//	$(".letter-box").css('color', 'rgba(77, 72, 72, 0');//transparent letters

			}
		});

		var userG = hangmanGame.userGuesses
		
		document.onkeypress = function(keyPressed) {
			var keyPressed = keyPressed || window.event;
			charCode = keyPressed.keyCode || keyPressed.which;
			lettersGuessed = String.fromCharCode(charCode);
		
			console.log(lettersGuessed)};
			//loop through letters to verify entry is in letter array
			document.onkeydown = function(input) {
				for (i = 0; i < hangmanGame.userGuesses.length; i++) {
					if (lettersGuessed == i) {
						console.log("hi");//not working, once returns false, moves on; 		how do I get it to cycle every index in array and look for 		any match?
						//continue
					} else if (lettersGuessed !== i){
						console.log("Nope");
						//display character message
					};
				};
			};
			
		document.onkeyup = function(input) {
			var userInput = (input.key).toLowerCase();
				if (hangmanGame.lives > 0) {
					hangmanGame.userGuesses.push(userInput);
					console.log(hangmanGame.userGuesses);
					var guessStr = hangmanGame.userGuesses.length;
					console.log(guessStr);
					console.log(userG);

				}
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













