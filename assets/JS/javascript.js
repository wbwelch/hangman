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
		//conditional is not accurately passing values through, also decreasing live value for each index in for loop. Need to approach without for loop
		gameAction: function() {
			for (var i = 0; i < gameWord.length; i++) {
				//if last letter is in gameword, print letter to screen in gameword area
				if (lastLetter == gameWord[i]) {
					//console.log("hi");
					console.log("gameword index: " + gameWord[i]);
					$(".index-" + gameWord[i]).text(lastLetter);
					//push lastLetter to userWord
				};
				//if last letter is not in gameword, is in hangmanGame.letters, and is not in hangmanGame.userGuesses:
				if (lastLetter !== gameWord[i]) {
					//add letter to used letters area
					$("#used-letters").html("<div>" + lastLetter + "</p>");
					//-1 from lives
					--lives;
					//display new lives count
					$("#guess-remain").html("<p>" + lives + "</p>");
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

		//write wins and lives to screen
		$("#wins-display").html("<p>" + wins + "</p>");
		$("#guess-remain").html("<p>" + lives + "</p>");

		//generate underlines the length of gameWord
		$("html").one("keyup", function() {
			hangmanGame.wordDisplay();
		});

		
		//on key up, push input to array, call hangmanGame.gameAction, reset last letter variable
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
	//if hangmanGame.lives === 0
		//display you died image
		//play you died music
		//display you died message
	
	
	//if userWord.length == gamewod/length
	//(need to: create userword global variable)
		//display killer guessed image
		//play serial killer theme music
		//display you won message
		//++wins
		//print new wins count to screen
});
		







		//reset game (clear user array, clear gameword and used letters divs, select a new random gameword, display underlined boxes to gameword area)













