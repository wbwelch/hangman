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
				letterBox.text(gameWord[i]);
				$("#answer-reveal").append(letterBox);
				$(".letter-box").css('color', 'rgba(77, 72, 72, 0');

			}
		});
	
	//(why is guessString = 0)


	var guessStr = hangmanGame.userGuesses.length;
	var lastGuess = guessStr.length - 1;
	console.log(lastGuess);



	//loop through letters to verify valid entry

		document.onkeyup = function(input) {
			var userInput = (input.key).toLowerCase();
			//(how do I compare the last index of one array to each index of another array; if last index of hangmanGame.userGuesses === any index of hangmanGame.letters, continue. Else, display character message)
			
			if (hangmanGame.lives > 0) {
				hangmanGame.userGuesses.push(userInput);
				console.log(hangmanGame.userGuesses);
				console.log(guessStr);
			}
			
		}
});

//if lastGuess === any index of gameword, write letter to word reveal 
//if not in game word, write to used letters area
//else do nothing



			//correct guesses
			//$("answers-reveal").append("")
			//$( "html" ).keyup(function() {
			//	for (i = 0; i < gameWord.length; i++) {
			//		var letterBox = $("<div class='letter-box'></div>");
			//		console.log(gameWord[i]);

		

			//incorrect guesses
			//$("used-letters").append("")

			


				
			//else if already guessed (compare to letters in guessed word area), do nothing
				//creat a temporary variable...change the index value?
				//max length is the length of the alphabet?


		//for each win, ++wins

		//loop until answers reveal length == gameWord length or lives <1

		//display win or lose message

		//change image

		//play song (add play/pause toggle)

		//reset game (clear user array, clear gameword and used letters div, select a new random gameword, display underlined boxes to gameword area)













